import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/brand";

const symptoms = [
  "Sakit lutut atau sendi yang berlarutan lebih dari 2 minggu",
  "Sakit pinggang yang menjalar ke kaki atau punggung",
  "Kebas atau kesemutan pada tangan, kaki, atau jari",
  "Susah berjalan, menaiki tangga, atau bangun dari duduk",
  "Sendi bengkak, panas, atau berbunyi semasa bergerak",
  "Kelemahan otot pada lengan atau kaki",
  "Sakit kepala atau pening berulang selepas strok",
  "Sukar mengangkat tangan atau memusing leher",
];

export default function SymptomsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Adakah Anda Mengalami Ini?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kenali Simptom Awal Sebelum Ia Menjadi Serius
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jika anda mengalami satu atau lebih simptom di bawah, jangan tunggu
            sehingga ia mengganggu kehidupan harian anda. Diagnosis awal adalah
            kunci pemulihan yang berjaya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-sm">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {symptoms.map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 text-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base leading-relaxed">
                  {symptom}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#8b0810] hover:bg-[#7a0710] text-white gap-2.5 text-base rounded-full px-8 py-6"
              )}
            >
              Bincang dengan Doktor Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
