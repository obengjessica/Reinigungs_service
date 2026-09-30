import {
  BeforeAfterSection,
  ContactSection,
  FaqSection,
  GallerySection,
  HeroSection,
  LocalSection,
  ServicesSection,
  WhyUsSection,
} from "../organisms/HomeSections";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <BeforeAfterSection />
      <LocalSection />
      <GallerySection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
