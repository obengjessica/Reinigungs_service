"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { BUSINESS_CONTACT } from "@/lib/business";
import { trackEvent } from "@/lib/client/analytics";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { Textarea } from "../atoms/Textarea";
import { Typography } from "../atoms/Typography";

type FormState = "idle" | "loading" | "success";

export function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<FormState>("idle");
  const [hasConsent, setHasConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailFallbackActive, setEmailFallbackActive] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setEmailFallbackActive(false);
    setState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      cleaningType: String(formData.get("cleaningType") ?? ""),
      frequency: String(formData.get("frequency") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      privacyConsent: hasConsent,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        if (response.status >= 500) {
          const body = [
            `Name: ${payload.name}`,
            `E-Mail: ${payload.email}`,
            payload.phone ? `Telefon: ${payload.phone}` : "",
            payload.cleaningType ? `Art der Reinigung: ${payload.cleaningType}` : "",
            payload.frequency ? `Gewünschte Frequenz: ${payload.frequency}` : "",
            "",
            "Nachricht:",
            payload.message,
          ]
            .filter(Boolean)
            .join("\n");
          const subject = encodeURIComponent(`Kontaktanfrage von ${payload.name}`);
          window.location.href = `${BUSINESS_CONTACT.emailHref}?subject=${subject}&body=${encodeURIComponent(body)}`;
          trackEvent("contact_form_submit_error", { form: "contact" });
          setState("idle");
          setEmailFallbackActive(true);
          setErrorMessage(t.contact.formEmailFallback);
          return;
        }
        throw new Error(result.error ?? t.contact.formError);
      }

      trackEvent("contact_form_submit_success", {
        form: "contact",
      });
      form.reset();
      setHasConsent(false);
      setState("success");
    } catch (error) {
      trackEvent("contact_form_submit_error", {
        form: "contact",
      });
      setState("idle");
      if (error instanceof TypeError) {
        const subject = encodeURIComponent(`Kontaktanfrage von ${payload.name}`);
        const body = encodeURIComponent(`${payload.message}\n\nName: ${payload.name}\nE-Mail: ${payload.email}`);
        window.location.href = `${BUSINESS_CONTACT.emailHref}?subject=${subject}&body=${body}`;
        setEmailFallbackActive(true);
        setErrorMessage(t.contact.formEmailFallback);
      } else {
        setErrorMessage(error instanceof Error ? error.message : t.contact.formError);
      }
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          placeholder="Bitte dieses Feld leer lassen"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            {t.contact.formName}
          </label>
          <Input id="name" name="name" placeholder={t.contact.formName} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            {t.contact.formPhone}
          </label>
          <Input id="phone" type="tel" name="phone" placeholder={t.contact.formPhone} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          {t.contact.formEmail}
        </label>
        <Input id="email" type="email" name="email" placeholder={t.contact.formEmail} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="cleaningType" className="block text-sm font-medium text-ink">
            {t.contact.formType}
          </label>
          <Select id="cleaningType" name="cleaningType" defaultValue="">
            <option value="" disabled>
              —
            </option>
            {t.contact.formTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="frequency" className="block text-sm font-medium text-ink">
            {t.contact.formFrequency}
          </label>
          <Select id="frequency" name="frequency" defaultValue="">
            <option value="" disabled>
              —
            </option>
            {t.contact.formFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          {t.contact.formMessage}
        </label>
        <Textarea id="message" name="message" placeholder={t.contact.formMessage} required />
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-hairline bg-surface p-3 text-sm text-ink">
        <input
          type="checkbox"
          name="privacyConsent"
          required
          checked={hasConsent}
          onChange={(event) => setHasConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-brand-forest text-brand-forest focus:ring-brand-forest"
        />
        <span>
          {t.contact.formConsent}{" "}
          <Link href="/datenschutz" className="font-semibold text-brand-forest underline">
            {t.contact.formConsentLink}
          </Link>{" "}
          {t.contact.formConsentEnd}
        </span>
      </label>

      <Button variant="pink" className="w-full" type="submit" disabled={state === "loading" || !hasConsent}>
        {state === "loading" ? t.contact.formSubmitting : t.contact.formSubmit}
      </Button>

      {state === "success" ? (
        <Typography variant="bodyMuted" className="text-brand-forest">
          {t.contact.formSuccess}
        </Typography>
      ) : null}
      {errorMessage ? (
        <Typography variant="bodyMuted" className="text-brand-pinkDark">
          {errorMessage}
          {emailFallbackActive ? (
            <span className="mt-1 block break-all">
              {BUSINESS_CONTACT.email} · {BUSINESS_CONTACT.phoneDisplay}
            </span>
          ) : null}
        </Typography>
      ) : null}
    </form>
  );
}
