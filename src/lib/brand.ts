export const BRAND = {
  name: "Klinik Primer Cherang Bertam Putra",
  shortName: "Primer Cherang",
  tagline: "Klinik Rawatan Saraf, Sendi, Post-Stroke dan Diet Klinikal",
  description:
    "Klinik Primer Cherang Bertam Putra menawarkan perkhidmatan kesihatan berkualiti tinggi termasuk rawatan sakit lutut, saraf, sendi, kebas, slipped disc, pemulihan selepas strok, program diet klinikal dan pembedahan kecil.",

  logo: {
    path: "/logo/logo.png",
    alt: "Logo Klinik Primer Cherang",
  },

  contact: {
    whatsapp: "60103973987",
    whatsappMessage:
      "Hai, saya ingin bertanya tentang perkhidmatan di Klinik Primer Cherang Bertam Putra.",
    phone: "010-397 3987",
    phoneRaw: "+60103973987",
    email: "pccbertamputra@gmail.com",
    address: {
      street: "No 33, Ground Floor, Jalan Persiaran Seksyen 4/5",
      city: "Bandar Putra Bertam",
      postcode: "13200",
      state: "Pulau Pinang",
      country: "Malaysia",
      full: "No 33, Ground Floor, Jalan Persiaran Seksyen 4/5, Bandar Putra Bertam, 13200 Kepala Batas, Pulau Pinang",
    },
    googleMapsUrl:
      "https://maps.google.com/?q=Klinik+Primer+Cherang+Bertam+Putra",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3253021673595!2d100.48430809999999!3d5.5186500999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ad107e65e1ae3%3A0x1c7f6cf4acfc2d9b!2sKlinik%20Primer%20Cherang%20Bertam%20Putra!5e0!3m2!1sen!2smy!4v1776919265390!5m2!1sen!2smy",
  },

  operatingHours: {
    daily: "8:30 PG - 10:00 MLM",
    days: "Isnin - Ahad",
  },

  registration: {
    number: "1060649-W",
    kkliu: "KKLIU 3109/EXP 31.12.2027",
  },

  social: {
    facebook: "https://www.facebook.com/primercherang",
    instagram: "https://www.instagram.com/primercherang",
  },

  url: "https://primercherangbertam.my",
} as const;

export function getWhatsAppUrl(): string {
  return "https://wa.link/tidbxo";
}
