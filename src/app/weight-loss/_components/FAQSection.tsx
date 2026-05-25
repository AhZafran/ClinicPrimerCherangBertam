import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Adakah suntikan dan ubat penurunan berat badan halal?",
    a: "Doktor kami akan menerangkan kandungan ubat atau suntikan yang dicadangkan dan boleh memberi pilihan alternatif jika anda mempunyai kebimbangan dari segi halal atau bahan tertentu.",
  },
  {
    q: "Adakah ada kesan sampingan?",
    a: "Setiap rawatan boleh ada kesan sampingan minor seperti loya, sakit perut, atau perubahan selera pada peringkat awal. Doktor akan menerangkan kesan yang mungkin dan cara menguruskannya semasa konsultasi.",
  },
  {
    q: "Berapa banyak berat badan yang boleh saya turunkan?",
    a: "Hasil bergantung pada profil kesihatan, kombinasi rawatan, dan komitmen anda terhadap pelan diet. Secara umumnya, pesakit boleh menjangka penurunan 0.5 hingga 1 kg seminggu secara selamat.",
  },
  {
    q: "Berapa lama saya perlu mengikuti program ini?",
    a: "Tempoh bergantung pada matlamat anda. Program asas biasanya 3 hingga 6 bulan, dengan susulan jangka panjang untuk memastikan berat badan kekal stabil.",
  },
  {
    q: "Adakah saya perlu berhenti makan makanan kegemaran saya?",
    a: "Tidak. Pelan diet klinikal kami bukan tentang menyekat sepenuhnya — ia tentang kawalan porsi, pilihan masa makan, dan keseimbangan nutrien yang sesuai dengan gaya hidup anda.",
  },
  {
    q: "Berapakah kos program ini?",
    a: "Kos berbeza mengikut kombinasi rawatan yang sesuai untuk anda. Sila hubungi kami melalui WhatsApp untuk pakej terkini dan perundingan awal yang lebih terperinci.",
  },
  {
    q: "Adakah program ini selamat untuk wanita mengandung atau menyusu?",
    a: "Suntikan dan ubat penurunan berat badan tidak disyorkan untuk wanita mengandung atau menyusu. Doktor akan cadangkan pendekatan diet sahaja jika sesuai dalam situasi anda.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Soalan Lazim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Soalan yang Selalu Ditanya
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-slate-50 rounded-2xl border border-transparent hover:border-primary/20 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none p-5 sm:p-6 font-semibold text-foreground">
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
