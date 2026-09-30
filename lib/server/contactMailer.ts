import nodemailer from "nodemailer";

type ContactMailInput = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  cleaningType?: string;
  frequency?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromEmail: string;
  toEmail: string;
};

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM_EMAIL;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL;

  if (!host || !user || !pass || !fromEmail || !toEmail || Number.isNaN(port)) {
    throw new Error("SMTP configuration is incomplete.");
  }

  return { host, port, secure, user, pass, fromEmail, toEmail };
}

export async function sendContactEmail(input: ContactMailInput): Promise<void> {
  const smtp = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const text = [
    "Neue Kontaktanfrage",
    "",
    `Name: ${input.name}`,
    `E-Mail: ${input.email}`,
    input.phone ? `Telefon: ${input.phone}` : null,
    input.cleaningType ? `Art der Reinigung: ${input.cleaningType}` : null,
    input.frequency ? `Gewünschte Frequenz: ${input.frequency}` : null,
    "",
    "Nachricht:",
    input.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  await transporter.sendMail({
    from: smtp.fromEmail,
    to: smtp.toEmail,
    replyTo: input.email,
    subject: `Neue Anfrage von ${input.name}`,
    text,
  });
}
