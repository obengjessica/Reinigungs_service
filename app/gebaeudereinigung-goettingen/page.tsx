import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Gebäudereinigung Göttingen",
  description:
    "Gebäudereinigung in Göttingen durch ReinigungsService-Göttingen. Strukturierte Unterhaltsreinigung für Wohn- und Gewerbeobjekte.",
  keywords: ["gebäudereinigung göttingen", "unterhaltsreinigung göttingen"],
  alternates: {
    canonical: "/gebaeudereinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gebäudereinigung",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "ReinigungsService-Göttingen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Gebäudereinigung Göttingen", item: "/gebaeudereinigung-goettingen" },
  ],
};

export default function GebäudereinigungPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Script
        id="service-schema-gebäudereinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-gebäudereinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-card">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Gebäudereinigung Göttingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Zuverlässige Gebäudereinigung für Immobilien in Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Wir reinigen Treppenhäuser, Gemeinschaftsflächen, Sanitärbereiche
            und stark frequentierte Zonen mit festen Qualitätsstandards.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Ich erstelle einen klaren Reinigungsplan, abgestimmt auf
            Objektgröße, Nutzung und Reinigungsintervalle.
          </Typography>
          <Button href="/contact">Gebäudereinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
