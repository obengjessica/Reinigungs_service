import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { BUSINESS_CONTACT } from "@/lib/business";
import { PHOTOS } from "@/lib/photos";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { SiteShell } from "../components/layout/SiteShell";
import { ThemeProvider, themeBootScript } from "../components/providers/ThemeProvider";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "ReinigungsService-Göttingen | Gebäudereinigung Göttingen",
    template: "%s | ReinigungsService-Göttingen",
  },
  description:
    "Professionelle Gebäude-, Treppenhaus- und Büroreinigung in Göttingen und Umgebung. Sauber. Zuverlässig. Professionell. Jetzt kostenloses Angebot anfragen.",
  keywords: [
    "gebäudereinigung göttingen",
    "reinigungsservice göttingen",
    "treppenhausreinigung göttingen",
    "büroreinigung göttingen",
    "unterhaltsreinigung göttingen",
  ],
  category: "Reinigungsdienstleistungen",
  authors: [{ name: "ReinigungsService-Göttingen" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReinigungsService-Göttingen | Gebäudereinigung Göttingen",
    description:
      "Professionelle Gebäude-, Treppenhaus- und Büroreinigung in Göttingen und Umgebung.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/slider-treppenhaus-nachher.jpg",
        width: 900,
        height: 1200,
        alt: "ReinigungsService-Göttingen – frisch gereinigtes Treppenhaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReinigungsService-Göttingen",
    description: "Professionelle Gebäudereinigung in Göttingen und Umgebung.",
    images: ["/images/slider-treppenhaus-nachher.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${libreBaskerville.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="antialiased font-body bg-surface text-ink">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ReinigungsService-Göttingen",
              description:
                "Selbstständiger Reinigungsservice für Treppenhäuser, Büros, Gebäude und Gemeinschaftsbereiche in Göttingen und Umgebung.",
              image: PHOTOS.hero,
              telephone: BUSINESS_CONTACT.phoneDisplay,
              email: BUSINESS_CONTACT.email,
              areaServed: "Göttingen",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Theodor-Heuss-Str. 11",
                postalCode: "37075",
                addressLocality: "Göttingen",
                addressCountry: "DE",
              },
            }),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <SiteShell>{children}</SiteShell>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
