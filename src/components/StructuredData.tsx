import { BRAND } from "@/lib/brand";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: BRAND.name,
    description: BRAND.description,
    url: BRAND.url,
    image: `${BRAND.url}/logo/Logoprimer.svg`,
    telephone: BRAND.contact.phoneRaw,
    email: BRAND.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.contact.address.street,
      addressLocality: BRAND.contact.address.city,
      addressRegion: BRAND.contact.address.state,
      postalCode: BRAND.contact.address.postcode,
      addressCountry: BRAND.contact.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    medicalSpecialty: [
      "Nerve Pain Treatment",
      "Joint Pain Treatment",
      "Post-Stroke Rehabilitation",
      "Clinical Diet Program",
      "Minor Surgery",
      "Health Screening",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
