import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/server/contactMailer";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  cleaningType?: string;
  frequency?: string;
  website?: string;
  privacyConsent: boolean;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const history = requestLog.get(ip) ?? [];
  const recentHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recentHistory.push(now);
  requestLog.set(ip, recentHistory);
  return recentHistory.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const phone = payload.phone?.trim() || undefined;
  const cleaningType = payload.cleaningType?.trim() || undefined;
  const frequency = payload.frequency?.trim() || undefined;
  const website = payload.website?.trim() ?? "";
  const privacyConsent = payload.privacyConsent === true;
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 },
    );
  }

  // Honeypot field should stay empty for real users.
  if (website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Bitte geben Sie einen gültigen Namen ein." },
      { status: 400 },
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 },
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Bitte beschreiben Sie Ihr Anliegen etwas genauer." },
      { status: 400 },
    );
  }

  if (!privacyConsent) {
    return NextResponse.json(
      { error: "Bitte stimmen Sie der Datenschutzerklärung zu." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({ name, email, message, phone, cleaningType, frequency });
  } catch (error) {
    console.error("Contact email send failed", error);
    return NextResponse.json(
      {
        error:
          "Ihre Anfrage konnte aktuell nicht übermittelt werden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
