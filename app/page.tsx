import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen | ReinigungsService-Göttingen",
  description:
    "Selbstständiger Reinigungsservice in Göttingen für Zuhause und Büro. ReinigungsService-Göttingen bietet Gebäudereinigung, Büroreinigung, Fensterreinigung und Grundreinigung.",
  keywords: [
    "reinigungsservice göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
    "reinigungsfirma göttingen",
  ],
};

export default function Page() {
  return <HomePage />;
}
