import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PHOTOS } from "@/lib/photos";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";
import { BrandedImage } from "../../components/molecules/BrandedImage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen",
  description:
    "Selbstständiger Reinigungsservice in Göttingen: Gebäudereinigung, Büroreinigung, Fensterreinigung und Grundreinigung mit persönlicher Betreuung.",
  keywords: [
    "reinigungsservice göttingen",
    "reinigungsfirma göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
  ],
  alternates: {
    canonical: "/reinigungsservice-goettingen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Leistungen bietet Ihr Reinigungsservice in Göttingen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ich biete Gebäudereinigung, Büroreinigung, Fensterreinigung und Grundreinigung für private und gewerbliche Kunden in Göttingen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell erhalte ich ein Angebot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel erhalten Sie innerhalb von 24 bis 48 Stunden ein transparentes Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Sind regelmäßige Reinigungspläne möglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, ich erstelle individuelle Reinigungspläne für wöchentliche, zweiwöchentliche oder flexible Einsätze.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Reinigungsservice",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "ReinigungsService-Göttingen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Reinigungsservice Göttingen", item: "/reinigungsservice-goettingen" },
  ],
};

export default function GoettingenLandingPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Script
        id="faq-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Section className="bg-card">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Typography as="p" variant="eyebrow" className="mb-3">
              Reinigungsservice Göttingen
            </Typography>
            <Typography as="h1" variant="h1" className="mb-5">
              Ihr professioneller Reinigungsservice in Göttingen
            </Typography>
            <Typography variant="bodyMuted" className="mb-8">
              ReinigungsService-Göttingen bietet als selbstständiges
              Einzelunternehmen zuverlässige Reinigung für Wohn- und
              Gewerbeflächen in Göttingen. Persönliche Betreuung, klare
              Checklisten, festen Standards und messbarer Qualität.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Jetzt Angebot anfragen</Button>
              <Button href="/services" variant="secondary">
                Leistungen ansehen
              </Button>
            </div>
          </div>
          <div className="pro-image-frame p-3 md:p-4">
            <BrandedImage
              src={PHOTOS.hero}
              alt="Professionelle Reinigung in Göttingen"
              width={900}
              height={620}
              priority
              className="h-full w-full rounded-xl object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mb-8 text-center">
          <Typography as="h2" variant="h2" className="mb-3">
            Unsere Reinigungsleistungen in Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
            Wählbare Servicebausteine für Privatkunden, Büros und
            gewerbliche Objekte.
          </Typography>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              href: "/gebaeudereinigung-goettingen",
              title: "Gebäudereinigung Göttingen",
              text: "Regelmäßige Unterhaltsreinigung für Wohn- und Gewerbeimmobilien.",
            },
            {
              href: "/bueroreinigung-goettingen",
              title: "Büroreinigung Göttingen",
              text: "Saubere Arbeitsplätze für Produktivität, Hygiene und Kundenwirkung.",
            },
            {
              href: "/grundreinigung-goettingen",
              title: "Grundreinigung Göttingen",
              text: "Intensive Tiefenreinigung für Neustarts, Umzüge und Sonderfälle.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-brand-mint bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Typography as="h3" variant="h3" className="mb-2">
                {item.title}
              </Typography>
              <Typography variant="bodyMuted">{item.text}</Typography>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <div className="mx-auto max-w-4xl">
          <Typography as="h2" variant="h2" className="mb-6 text-center">
            Häufige Fragen zum Reinigungsservice in Göttingen
          </Typography>
          <div className="space-y-5">
            <article className="rounded-xl border border-brand-mint p-5">
              <Typography as="h3" variant="h3" className="mb-2">
                Welche Gebiete in Göttingen bedienen Sie?
              </Typography>
              <Typography variant="bodyMuted">
                Wir bedienen das Stadtgebiet Göttingen und umliegende
                Bereiche. Kontaktieren Sie uns kurz für eine schnelle
                Verfügbarkeitsprüfung.
              </Typography>
            </article>
            <article className="rounded-xl border border-brand-mint p-5">
              <Typography as="h3" variant="h3" className="mb-2">
                Haben Sie einen festen Ansprechpartner?
              </Typography>
              <Typography variant="bodyMuted">
                Ja. Als selbstständiger Reinigungsservice betreue ich Ihr Objekt
                persönlich – Sie haben immer denselben direkten Ansprechpartner.
              </Typography>
            </article>
          </div>
        </div>
      </Section>
    </main>
  );
}
