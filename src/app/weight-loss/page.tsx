import type { Metadata } from "next";
import Header from "@/components/Header";
import TestimonialSection from "@/components/TestimonialSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "./_components/PageHero";
import ProgrammePillarsSection from "./_components/ProgrammePillarsSection";
import PillarDetailsSection from "./_components/PillarDetailsSection";
import SuitabilitySection from "./_components/SuitabilitySection";
import JourneySection from "./_components/JourneySection";
import FAQSection from "./_components/FAQSection";

export const metadata: Metadata = {
  title:
    "Program Penurunan Berat Badan — Injection, Medicine & Diet Klinikal | Klinik Primer Cherang Bertam Putra",
  description:
    "Program penurunan berat badan menyeluruh: suntikan, ubat, dan pelan diet peribadi di bawah pengawasan Dr bertauliah. Klinik Primer Cherang, Kepala Batas, Pulau Pinang.",
  keywords: [
    "weight loss injection",
    "weight loss medicine",
    "program diet klinikal",
    "penurunan berat badan",
    "turun berat badan kepala batas",
    "weight loss pulau pinang",
    "ubat kurus berlesen",
    "suntikan kurus",
    "klinik diet pulau pinang",
  ],
  alternates: { canonical: "/weight-loss" },
  openGraph: {
    title:
      "Program Penurunan Berat Badan Klinikal | Klinik Primer Cherang",
    description:
      "Suntikan, ubat, dan diet klinikal di bawah pengawasan doktor di Kepala Batas, Pulau Pinang.",
    url: "/weight-loss",
    siteName: "Klinik Primer Cherang Bertam Putra",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Program Penurunan Berat Badan Klinikal | Klinik Primer Cherang",
    description:
      "Suntikan, ubat, dan diet klinikal di bawah pengawasan doktor di Kepala Batas, Pulau Pinang.",
  },
};

export default function WeightLossPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero />
        <ProgrammePillarsSection />
        <PillarDetailsSection />
        <SuitabilitySection />
        <JourneySection />
        <TestimonialSection />
        <FAQSection />
        <ContactUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
