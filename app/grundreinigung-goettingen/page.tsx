import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Grundreinigung Göttingen",
  description:
    "Grundreinigung in Göttingen für intensive Tiefenreinigung bei Umzug, Neustart oder stark beanspruchten Flächen.",
  keywords: ["grundreinigung göttingen", "tiefenreinigung göttingen"],
  alternates: {
    canonical: "/grundreinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Grundreinigung",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "ReinigungsService-Göttingen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Grundreinigung Göttingen", item: "/grundreinigung-goettingen" },
  ],
};

export default function GrundreinigungPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Script
        id="service-schema-grundreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-grundreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-card">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Grundreinigung Göttingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Intensiv-Grundreinigung für Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Unsere Grundreinigung entfernt hartnäckige Rückstände und
            reinigt stark beanspruchte Flächen bis in die Details.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Besonders sinnvoll bei Einzug, Auszug, Frühjahrsreinigung oder
            nach Bau- und Renovierungsarbeiten.
          </Typography>
          <Button href="/contact">Grundreinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
