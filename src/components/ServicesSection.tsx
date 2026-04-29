import Image from "next/image";

const services = [
  {
    image: "/services/lutut-rawatan.webp",
    title: "Rawatan Sakit Lutut",
    description:
      "Nak tahu punca sebenar sakit lutut anda dan cara merawatnya? Dapatkan diagnosis yang tepat serta pelan rawatan yang sesuai hari ini!",
  },
  {
    image: "/services/dietprogram.jpeg",
    title: "Program Diet",
    description:
      "Mahukan tubuh badan yang sihat dan ideal tanpa menyeksa diri? Ketahui rahsia diet yang berkesan dan sihat!",
  },
  {
    image: "/services/rawatanstroke.webp",
    title: "Rawatan Sakit Saraf",
    description:
      "Risau sakit saraf mengganggu aktiviti harian anda? Dapatkan pemeriksaan saraf dengan diagnosis sejak sesi pertama!",
  },
  {
    image: "/services/pelajar-dan-kerja.webp",
    title: "Pemeriksaan Kesihatan Pelajar & Pekerja",
    description:
      "Pastikan anda sentiasa berada dalam keadaan terbaik untuk belajar atau bekerja!",
  },
  {
    image: "/services/kesihatan.webp",
    title: "Ujian Saringan Kesihatan",
    description:
      "Jangan biarkan masalah kesihatan menghalang anda! Buat ujian darah anda hari ini!",
  },
  {
    image: "/services/luka.webp",
    title: "Pembedahan Kecil",
    description:
      "Pembedahan Kecil dengan Ketepatan Tinggi dan Pemulihan yang Selesa.",
  },
  {
    image: "/services/weight-loss-injection.jpg",
    title: "Weight Loss Injection",
    description:
      "Menawarkan suntikan penurunan berat badan untuk membantu anda mencapai matlamat pengurusan berat badan dengan rawatan yang terbukti berkesan dengan pengawasan Dr bertauliah.",
  },
  {
    image: "/services/weight-loss-medicine.jpg",
    title: "Weight Loss Medicine",
    description:
      "Menawarkan penyelesaian ubat penurunan berat badan yang berkesan untuk membantu anda mencapai pengurusan berat badan dengan pengawasan Dr bertauliah.",
  },
];

const WHATSAPP_URL = "https://wa.link/tidbxo";

export default function ServicesSection() {
  return (
    <section id="perkhidmatan" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Perkhidmatan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Perkhidmatan Kesihatan Komprehensif
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan pelbagai perkhidmatan kesihatan untuk memenuhi
            keperluan anda dan keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full relative rounded-xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={800}
                  loading="eager"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
                {service.description}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-red-500 text-red-500 text-lg font-semibold hover:bg-red-50 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Kami
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
