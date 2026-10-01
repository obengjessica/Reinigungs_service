import type { Metadata } from "next";
import Link from "next/link";
import { PHOTOS } from "@/lib/photos";
import {
  PageIntroSection,
  ServicesGridSection,
} from "../../components/organisms/SharedSections";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";
import { Button } from "../../components/atoms/Button";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Entdecken Sie professionelle Wohnungs-, Büro- und Grundreinigung von ReinigungsService-Göttingen.",
  keywords: [
    "leistungen göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <PageIntroSection
        eyebrow="Leistungen"
        title="Professionelle Reinigungsleistungen für jeden Bedarf"
        description="Klare Servicepakete für private und gewerbliche Flächen, umgesetzt mit gleichbleibend hoher Qualität."
        imageSrc={PHOTOS.services.office}
        imageAlt="Sauberer, heller Büroraum bereit für professionelle Reinigung"
      />
      <ServicesGridSection />
      <Section className="bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow mb-5">Preise</span>
          <Typography as="h2" variant="h2" className="mb-4 mt-5">
            Individuelles Angebot statt Pauschalpreis
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Die Kosten hängen von Fläche, Zustand und gewünschter Reinigungsfrequenz ab. Kontaktieren
            Sie uns – Sie erhalten ein unverbindliches, auf Ihre Räumlichkeiten zugeschnittenes Angebot.
          </Typography>
          <Button href="/contact">Angebot anfragen</Button>
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="mx-auto max-w-4xl">
          <Typography as="h2" variant="h2" className="mb-4 text-center">
            Lokale Leistungsseiten für Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6 text-center">
            Detaillierte Informationen zu jeder Leistung in Göttingen.
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["/reinigungsservice-goettingen", "Reinigungsservice Göttingen"],
              ["/gebaeudereinigung-goettingen", "Gebäudereinigung Göttingen"],
              ["/bueroreinigung-goettingen", "Büroreinigung Göttingen"],
              ["/grundreinigung-goettingen", "Grundreinigung Göttingen"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-brand-mint bg-card px-4 py-2 text-sm font-semibold text-brand-forest transition hover:bg-brand-mintLight dark:hover:bg-white/5"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
