import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  ContactSection,
  PageIntroSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie ReinigungsService-Göttingen für ein Angebot – per Formular, E-Mail, Telefon oder direkt in Göttingen.",
  keywords: ["kontakt reinigungsservice göttingen", "angebot reinigungsfirma göttingen"],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <PageIntroSection
        eyebrow="Kontakt"
        title="Planen wir gemeinsam Ihre Reinigung"
        description="Teilen Sie uns Ihren Bedarf mit und Sie erhalten zeitnah ein klares, individuelles Angebot."
        imageSrc={PHOTOS.contactIntro}
        imageAlt="Freundlicher Empfangsbereich für die Planung Ihrer Reinigung"
      />
      <ContactSection />
    </main>
  );
}
