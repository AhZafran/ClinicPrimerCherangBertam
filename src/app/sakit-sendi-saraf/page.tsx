import type { Metadata } from "next";
import Header from "@/components/Header";
import TestimonialSection from "@/components/TestimonialSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "./_components/PageHero";
import ConditionsSection from "./_components/ConditionsSection";
import SymptomsSection from "./_components/SymptomsSection";
import TreatmentApproachSection from "./_components/TreatmentApproachSection";
import VideoTestimonialSection from "./_components/VideoTestimonialSection";
import FAQSection from "./_components/FAQSection";

export const metadata: Metadata = {
  title:
    "Rawatan Sakit Sendi, Saraf & Pemulihan Post-Stroke | Klinik Primer Cherang Bertam Putra",
  description:
    "Rawatan sakit lutut, sendi, saraf terjepit, kebas, slipped disc dan pemulihan selepas strok di Kepala Batas, Pulau Pinang. Diagnosis tepat, pelan rawatan peribadi.",
  keywords: [
    "rawatan sakit lutut",
    "rawatan sakit saraf",
    "rawatan sakit sendi",
    "slipped disc",
    "sakit pinggang",
    "kebas tangan kaki",
    "pemulihan post strok",
    "rawatan post stroke kepala batas",
    "klinik sakit sendi pulau pinang",
  ],
  alternates: { canonical: "/sakit-sendi-saraf" },
  openGraph: {
    title:
      "Rawatan Sakit Sendi, Saraf & Pemulihan Post-Stroke | Klinik Primer Cherang",
    description:
      "Rawatan sakit lutut, sendi, saraf, kebas, slipped disc dan pemulihan post-strok di Kepala Batas, Pulau Pinang.",
    url: "/sakit-sendi-saraf",
    siteName: "Klinik Primer Cherang Bertam Putra",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rawatan Sakit Sendi, Saraf & Pemulihan Post-Stroke | Klinik Primer Cherang",
    description:
      "Rawatan sakit lutut, sendi, saraf, kebas, slipped disc dan pemulihan post-strok di Kepala Batas, Pulau Pinang.",
  },
};

export default function SakitSendiSarafPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero />
        <ConditionsSection />
        <SymptomsSection />
        <TreatmentApproachSection />
        <VideoTestimonialSection />
        <TestimonialSection />
        <FAQSection />
        <ContactUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
