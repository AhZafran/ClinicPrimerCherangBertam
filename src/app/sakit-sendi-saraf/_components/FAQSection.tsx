import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Adakah saya perlu temujanji untuk rawatan sakit sendi atau saraf?",
    a: "Temujanji adalah digalakkan untuk memastikan anda mendapat masa konsultasi yang mencukupi dengan doktor. Hubungi kami melalui WhatsApp untuk menempah slot yang sesuai.",
  },
  {
    q: "Berapa lama satu sesi konsultasi dan rawatan?",
    a: "Sesi konsultasi awal biasanya mengambil masa 30 hingga 45 minit, termasuk pemeriksaan fizikal dan perbincangan pelan rawatan. Sesi susulan biasanya lebih singkat.",
  },
  {
    q: "Adakah rawatan ini perlu pembedahan?",
    a: "Tidak semestinya. Majoriti kes sakit sendi, saraf, dan slipped disc boleh dirawat secara konservatif melalui ubat, terapi, dan perubahan gaya hidup. Pembedahan hanya disyorkan jika benar-benar diperlukan.",
  },
  {
    q: "Berapa kerap saya perlu datang untuk susulan?",
    a: "Frekuensi susulan bergantung pada keadaan anda dan respons terhadap rawatan. Lazimnya susulan dilakukan setiap 2 hingga 4 minggu pada peringkat awal.",
  },
  {
    q: "Adakah klinik menerima panel insurans?",
    a: "Ya, kami menerima beberapa panel insurans dan kad perubatan. Sila rujuk senarai panel di laman utama kami atau hubungi kami untuk pengesahan.",
  },
  {
    q: "Bolehkah saya datang untuk pemulihan post-stroke?",
    a: "Ya. Kami menyediakan bimbingan pemulihan jangka panjang termasuk kawalan tekanan darah, susulan ubat, nasihat pemakanan, dan saranan rehabilitasi yang sesuai untuk pesakit strok.",
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
