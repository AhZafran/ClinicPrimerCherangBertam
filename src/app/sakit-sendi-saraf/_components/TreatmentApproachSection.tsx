const steps = [
  {
    number: "01",
    title: "Konsultasi Awal",
    description:
      "Sesi perbincangan mendalam dengan doktor untuk memahami simptom, sejarah perubatan, dan gaya hidup anda.",
  },
  {
    number: "02",
    title: "Pemeriksaan & Diagnosis",
    description:
      "Pemeriksaan fizikal yang teliti dan, jika perlu, ujian sokongan untuk mengenal pasti punca sebenar masalah anda.",
  },
  {
    number: "03",
    title: "Pelan Rawatan Peribadi",
    description:
      "Pelan rawatan yang disesuaikan — termasuk ubat, terapi fizikal, nasihat gaya hidup, atau rujukan pakar jika diperlukan.",
  },
  {
    number: "04",
    title: "Susulan Berterusan",
    description:
      "Pemantauan kemajuan secara berkala untuk memastikan pemulihan berjalan lancar dan rawatan diselaras mengikut keperluan.",
  },
];

export default function TreatmentApproachSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pendekatan Rawatan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Dari Konsultasi ke Pemulihan — Setiap Langkah Diawasi Doktor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami percaya rawatan yang berkesan bermula dengan diagnosis yang
            tepat dan diikuti susulan yang konsisten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
