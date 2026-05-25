import Image from "next/image";

type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  what: string;
  forWhom: string[];
  safety: string;
  reverse?: boolean;
};

const pillars: Pillar[] = [
  {
    id: "injection",
    eyebrow: "Weight Loss Injection",
    title: "Suntikan Penurunan Berat Badan",
    image: "/services/weight-loss-injection.jpg",
    imageAlt: "Weight loss injection di Klinik Primer Cherang Bertam Putra",
    what: "Suntikan terkawal yang membantu mengurangkan selera makan, melambatkan pengosongan perut, dan menyokong pembakaran lemak. Diberi mengikut dos yang disesuaikan dengan profil kesihatan anda.",
    forWhom: [
      "Pesakit dengan BMI 30 kg/m² ke atas, atau 27 kg/m² ke atas dengan komorbiditi (diabetes, tekanan darah tinggi, kolesterol tinggi)",
      "Mereka yang mengalami selera makan berlebihan atau sentiasa lapar",
      "Pesakit pra-diabetes atau diabetes jenis 2 yang ingin mengurangkan berat badan dengan selamat",
    ],
    safety:
      "Setiap suntikan diberi di klinik dengan pengawasan doktor. Profil kesihatan, tekanan darah, dan respons badan dipantau pada setiap sesi.",
  },
  {
    id: "medicine",
    eyebrow: "Weight Loss Medicine",
    title: "Ubat Penurunan Berat Badan",
    image: "/services/weight-loss-medicine.jpg",
    imageAlt: "Weight loss medicine di Klinik Primer Cherang Bertam Putra",
    what: "Ubat-ubatan terkawal yang membantu kawalan selera, metabolisme, atau penyerapan lemak. Dipreskripsi oleh doktor selepas penilaian penuh terhadap profil kesihatan anda.",
    forWhom: [
      "Pesakit dengan BMI 30 kg/m² ke atas, atau 27 kg/m² ke atas dengan komorbiditi (diabetes, tekanan darah tinggi, kolesterol tinggi)",
      "Pesakit yang lebih sesuai dengan ubat oral berbanding suntikan",
      "Pesakit dengan masalah kesihatan tertentu yang memerlukan pilihan ubat khusus",
    ],
    safety:
      "Hanya ubat berlesen dan terkawal yang digunakan. Doktor akan menyemak interaksi ubat sedia ada anda untuk memastikan keselamatan.",
    reverse: true,
  },
  {
    id: "diet-klinikal",
    eyebrow: "Program Diet Klinikal",
    title: "Pelan Diet Peribadi",
    image: "/services/diet-poster.webp",
    imageAlt: "Program diet klinikal di Klinik Primer Cherang Bertam Putra",
    what: "Bukan diet umum yang anda jumpa di internet. Ini adalah pelan pemakanan yang dirancang oleh doktor berdasarkan keadaan kesihatan, gaya hidup, dan matlamat berat badan anda.",
    forWhom: [
      "Sesiapa sahaja yang ingin menurunkan berat badan secara semula jadi",
      "Pesakit yang ingin mengelakkan ubat atau suntikan",
      "Pesakit dengan masalah kesihatan kronik (kolesterol, tekanan darah, kencing manis)",
    ],
    safety:
      "Pelan diet diselaras setiap kali susulan untuk memastikan ia berkesan dan tidak menjejaskan kesihatan keseluruhan anda.",
  },
];

function PillarBlock({ pillar }: { pillar: Pillar }) {
  return (
    <div
      id={pillar.id}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
    >
      <div className={pillar.reverse ? "lg:order-2" : ""}>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={pillar.image}
            alt={pillar.imageAlt}
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className={pillar.reverse ? "lg:order-1" : ""}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          {pillar.eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          {pillar.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
          {pillar.what}
        </p>

        <h4 className="font-semibold text-foreground mb-2">Sesuai untuk:</h4>
        <ul className="space-y-2 mb-6">
          {pillar.forWhom.map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
          <p className="text-sm text-foreground leading-relaxed">
            <strong>Keselamatan: </strong>
            {pillar.safety}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PillarDetailsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {pillars.map((pillar) => (
          <PillarBlock key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
