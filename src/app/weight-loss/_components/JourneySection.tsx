const steps = [
  {
    number: "01",
    title: "Konsultasi Awal",
    description:
      "Perbincangan dengan doktor mengenai matlamat berat badan, sejarah perubatan, dan cabaran sebelumnya.",
  },
  {
    number: "02",
    title: "Penilaian Kesihatan",
    description:
      "Pemeriksaan asas — berat, tinggi, BMI, tekanan darah, dan ujian darah jika perlu untuk memastikan program selamat.",
  },
  {
    number: "03",
    title: "Pelan Peribadi",
    description:
      "Doktor akan cadangkan kombinasi suntikan, ubat, dan/atau pelan diet yang paling sesuai dengan keadaan anda.",
  },
  {
    number: "04",
    title: "Susulan Berkala",
    description:
      "Pemantauan kemajuan setiap beberapa minggu untuk menyelaras pelan dan memastikan hasil yang konsisten dan kekal.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Perjalanan Anda Bersama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Empat Langkah Mudah ke Berat Badan Ideal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap langkah diawasi doktor — anda tidak bersendirian dalam
            perjalanan ini.
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
