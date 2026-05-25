import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const conditions = [
  {
    icon: "healthicons:joints",
    title: "Sakit Lutut",
    description:
      "Sakit lutut akibat keausan, kecederaan sukan, atau radang sendi (osteoarthritis). Diagnosis tepat untuk pelan rawatan yang sesuai.",
  },
  {
    icon: "healthicons:orthopaedics",
    title: "Sakit Sendi",
    description:
      "Sakit dan kekejangan pada sendi bahu, siku, pergelangan tangan, pinggul atau buku lali — termasuk masalah arthritis kronik.",
  },
  {
    icon: "healthicons:nerve",
    title: "Sakit Saraf",
    description:
      "Sakit saraf terjepit, sciatica, atau sakit saraf yang menjalar dari pinggang ke kaki — perlu siasatan saraf yang menyeluruh.",
  },
  {
    icon: "healthicons:pain",
    title: "Kebas dan Kesemutan",
    description:
      "Kebas pada tangan, kaki, atau jari yang berlarutan — selalunya petanda masalah saraf yang perlu dirawat awal.",
  },
  {
    icon: "healthicons:spine",
    title: "Slipped Disc (Disc Tergelincir)",
    description:
      "Sakit pinggang yang teruk atau menjalar ke kaki akibat slipped disc. Rawatan konservatif tanpa pembedahan untuk kebanyakan kes.",
  },
  {
    icon: "healthicons:back-pain",
    title: "Sakit Pinggang Kronik",
    description:
      "Sakit pinggang berpanjangan akibat postur, kerja berat, atau masalah tulang belakang. Pelan rawatan jangka panjang yang berkesan.",
  },
  {
    icon: "healthicons:neurology",
    title: "Pemulihan Post-Stroke",
    description:
      "Bimbingan pemulihan selepas strok — termasuk kawalan tekanan darah, pemulihan fungsi, dan susulan kesihatan jangka panjang.",
  },
];

export default function ConditionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Masalah Yang Kami Rawat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pelbagai Kondisi Sendi, Saraf dan Pemulihan Strok
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dari sakit lutut harian hingga pemulihan selepas strok — pasukan
            doktor kami akan menilai dan merawat punca sebenar masalah anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <Card
              key={condition.title}
              className="bg-white border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl"
            >
              <CardHeader className="pt-8">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <Icon icon={condition.icon} className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">{condition.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {condition.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
