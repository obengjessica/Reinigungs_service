import type { Metadata } from "next";
import { BUSINESS_CONTACT } from "@/lib/business";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von ReinigungsService-Göttingen als Einzelunternehmen gemäß den gesetzlichen Pflichtangaben nach deutschem Recht.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Section className="bg-surface">
        <div className="mx-auto max-w-4xl">
          <Typography as="h1" variant="h1" className="mb-6">
            Impressum
          </Typography>
          <Typography variant="bodyMuted" className="mb-10">
            Angaben gemäß § 5 TMG
          </Typography>

          <div className="space-y-10">
            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Diensteanbieter
              </Typography>
              <Typography variant="bodyMuted">
                ReinigungsService-Göttingen
                <br />
                Einzelunternehmen (selbstständige Reinigungsdienstleistung)
                <br />
                Theodor-Heuss-Str. 11
                <br />
                37075 Göttingen
                <br />
                Deutschland
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Kontakt
              </Typography>
              <Typography variant="bodyMuted">
                Telefon: {BUSINESS_CONTACT.phoneDisplay}
                <br />
                E-Mail: {BUSINESS_CONTACT.email}
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Inhaber
              </Typography>
              <Typography variant="bodyMuted">
                Selbstständige Reinigungskraft
                <br />
                ReinigungsService-Göttingen
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Haftung für Inhalte
              </Typography>
              <Typography variant="bodyMuted">
                Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen
                für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind
                jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Haftung für Links
              </Typography>
              <Typography variant="bodyMuted">
                Unser Angebot kann Links zu externen Websites Dritter enthalten,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Urheberrecht
              </Typography>
              <Typography variant="bodyMuted">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </Typography>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
