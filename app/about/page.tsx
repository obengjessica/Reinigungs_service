import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  AboutContentSection,
  PageIntroSection,
  ProfessionalPositioningSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie ReinigungsService-Göttingen kennen: selbstständiger Reinigungsservice mit persönlicher Betreuung in Göttingen.",
  keywords: ["reinigungsfirma göttingen", "über uns reinigungsservice göttingen"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <PageIntroSection
        eyebrow="Über uns"
        title="Selbstständiger Reinigungsservice, dem Sie vertrauen können"
        description="Als Einzelunternehmen in Göttingen verbinde ich verlässliche Abläufe mit hoher Ausführungsqualität – persönlich, planbar und mit klarem Ansprechpartner."
        imageSrc={PHOTOS.about}
        imageAlt="Selbstständige Reinigungskraft bei der professionellen Ausführung"
      />
      <AboutContentSection />
      <ProfessionalPositioningSection />
    </main>
  );
}
