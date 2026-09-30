import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Büroreinigung Göttingen",
  description:
    "Professionelle Büroreinigung in Göttingen. ReinigungsService-Göttingen sorgt für hygienische, gepflegte und kundenfreundliche Arbeitsumgebungen.",
  keywords: ["büroreinigung göttingen", "büro reinigung göttingen"],
  alternates: {
    canonical: "/bueroreinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Büroreinigung",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "ReinigungsService-Göttingen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Büroreinigung Göttingen", item: "/bueroreinigung-goettingen" },
  ],
};

export default function BüroreinigungPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Script
        id="service-schema-büroreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-büroreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-card">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Büroreinigung Göttingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Büroreinigung in Göttingen für produktive Teams
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Ein sauberes Büro reduziert Ausfallzeiten, stärkt den ersten
            Eindruck bei Kunden und verbessert das Arbeitsumfeld.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Wir bieten frühe, späte und flexible Einsatzzeiten für laufende
            Büroreinigung in Göttingen.
          </Typography>
          <Button href="/contact">Büroreinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
