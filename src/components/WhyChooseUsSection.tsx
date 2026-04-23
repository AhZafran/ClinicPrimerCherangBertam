import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  UserRoundCheck,
  Building2,
  Clock,
  CircleParking,
  ClipboardCheck,
  CircleDollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: UserRoundCheck,
    title: "Dr dan Staff Berpengalaman",
    description:
      "Pasukan perubatan berpengalaman yang komited untuk kesihatan anda",
  },
  {
    icon: Building2,
    title: "Klinik yang Bersih dan Selesa",
    description:
      "Persekitaran klinik yang bersih, selesa dan mesra keluarga",
  },
  {
    icon: Clock,
    title: "Masa Menunggu yang Sekejap",
    description:
      "Perkhidmatan cepat dan efisien untuk menjimatkan masa anda",
  },
  {
    icon: CircleParking,
    title: "Parking Banyak dan Mudah",
    description: "Kemudahan parking yang luas dan mudah diakses",
  },
  {
    icon: ClipboardCheck,
    title: "Lebih dari 5 Panel Klinik",
    description:
      "Rangkaian panel klinik yang luas untuk kemudahan anda",
  },
  {
    icon: CircleDollarSign,
    title: "Harga Berpatutan",
    description:
      "Perkhidmatan berkualiti tinggi dengan harga yang berpatutan",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="kenapa-kami"
      className="py-20 sm:py-28 bg-gradient-to-b from-primary/10 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami untuk memberikan perkhidmatan kesihatan terbaik kepada
            anda dan keluarga
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="text-center bg-white border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl"
            >
              <CardHeader className="items-center justify-items-center pt-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{reason.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
