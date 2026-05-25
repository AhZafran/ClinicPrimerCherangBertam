import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const pillars = [
  {
    icon: "healthicons:syringe",
    title: "Weight Loss Injection",
    description:
      "Suntikan penurunan berat badan yang membantu mengawal selera dan mempercepatkan pembakaran lemak — sesuai untuk pesakit yang gagal dengan diet biasa.",
    href: "#injection",
  },
  {
    icon: "healthicons:medicines",
    title: "Weight Loss Medicine",
    description:
      "Ubat penurunan berat badan terkawal yang diberi mengikut keperluan dan profil kesihatan anda, dengan susulan doktor yang berterusan.",
    href: "#medicine",
  },
  {
    icon: "healthicons:nutrition",
    title: "Program Diet Klinikal",
    description:
      "Pelan pemakanan peribadi yang dirancang oleh doktor — bukan diet umum, tetapi pelan yang disesuaikan dengan gaya hidup dan kesihatan anda.",
    href: "#diet-klinikal",
  },
];

export default function ProgrammePillarsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Tiga Pendekatan, Satu Matlamat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pelan Penurunan Berat Badan Menyeluruh
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap individu mempunyai keperluan berbeza. Doktor kami akan
            menentukan kombinasi yang paling sesuai untuk anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="block group"
            >
              <Card className="h-full bg-white border-none shadow-sm group-hover:shadow-lg transition-shadow rounded-2xl">
                <CardHeader className="pt-8">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <Icon icon={pillar.icon} className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                  <span className="text-primary text-sm font-semibold mt-3 inline-block group-hover:underline">
                    Ketahui lebih lanjut →
                  </span>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
