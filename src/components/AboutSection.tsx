import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="py-20 sm:py-28 bg-gradient-to-b from-muted/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/tentangKami/image.png"
                alt="Pasukan Klinik Primer Cherang Bertam Putra"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/15 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Komited Terhadap Kesihatan Anda
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
              Klinik Primer Cherang Bertam Putra diuruskan oleh{" "}
              <strong>Dr. Norfazliana Binti A Hamid</strong> bersama pasukan
              doktor perubatan yang berpengalaman. Kami menawarkan perkhidmatan
              pesakit luar yang komprehensif kepada penduduk Kepala Batas dan sekitarnya. Pasukan
              perubatan kami berpengalaman dalam merawat masalah kesakitan
              seperti sakit lutut, saraf, sendi, kebas, slipped disc serta
              pemulihan selepas strok. Kami juga menyediakan program diet
              klinikal yang terbukti berkesan untuk membantu pesakit menurunkan
              berat badan secara selamat.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
              Fokus kami adalah pada rawatan berasaskan kajian klinikal,
              pemulihan fungsi, dan meningkatkan kualiti hidup setiap pesakit
              melalui bimbingan perubatan yang menyeluruh dan berterusan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
