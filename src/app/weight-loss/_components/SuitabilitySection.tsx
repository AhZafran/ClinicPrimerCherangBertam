import { CheckCircle2 } from "lucide-react";

const criteria = [
  "BMI anda 30 kg/m² atau lebih (obes), atau 27 kg/m² ke atas dengan masalah kesihatan seperti diabetes, tekanan darah tinggi, atau kolesterol tinggi",
  "Sudah cuba pelbagai diet tetapi gagal kekal",
  "Mengalami masalah kesihatan berkaitan berat seperti diabetes, kolesterol tinggi, atau tekanan darah tinggi",
  "Sakit lutut, sendi atau pinggang akibat berat badan berlebihan",
  "Ingin menurunkan berat badan sebelum pembedahan atau prosedur perubatan",
  "Inginkan pendekatan terkawal dengan susulan doktor, bukan diet ekstrim",
];

const bmiTable = [
  { range: "Bawah 18.5", category: "Kurang berat", color: "text-blue-600" },
  { range: "18.5 – 24.9", category: "Berat normal", color: "text-green-600" },
  { range: "25.0 – 29.9", category: "Berat berlebihan", color: "text-yellow-600" },
  { range: "30.0 – 34.9", category: "Obes Tahap I", color: "text-orange-600" },
  { range: "35.0 ke atas", category: "Obes Tahap II / III", color: "text-red-600" },
];

export default function SuitabilitySection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Adakah Program Ini Sesuai Untuk Anda?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Periksa Kesesuaian Anda
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Program ini sesuai jika anda...
            </h3>
            <ul className="space-y-4">
              {criteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Panduan BMI
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              BMI = Berat (kg) ÷ Tinggi (m)²
            </p>

            <div className="space-y-3">
              {bmiTable.map((row) => (
                <div
                  key={row.range}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
                >
                  <span className="text-sm font-mono text-foreground">
                    {row.range}
                  </span>
                  <span className={`text-sm font-semibold ${row.color}`}>
                    {row.category}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Ubat & suntikan penurunan berat badan biasanya disyorkan untuk
              BMI 30 ke atas, atau BMI 27 ke atas dengan komorbiditi seperti
              diabetes atau tekanan darah tinggi. Pelan diet klinikal sesuai
              untuk semua peringkat. Doktor akan menilai profil kesihatan
              anda untuk menentukan pilihan yang paling sesuai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
