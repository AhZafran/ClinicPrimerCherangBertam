"use client";

import { useState, useCallback } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const panels = [
  { name: "MiCARE", image: "/panel/MICARE.webp" },
  { name: "Health Connect", image: "/panel/HC1.webp" },
  { name: "MedNefits", image: "/panel/MEDNEFITS1.webp" },
  { name: "IHP", image: "/panel/IHP.avif" },
  { name: "eMAS", image: "/panel/EMAS1.webp" },
  { name: "PMCare", image: "/panel/PMCARE.webp" },
  { name: "MedKad", image: "/panel/MEDKAD1.webp" },
  { name: "Etiqa", image: "/panel/ETIQA1.webp" },
  { name: "Sehati", image: "/panel/sehati.webp" },
];

export default function PanelSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? panels.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => (i === panels.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section
      id="panel"
      className="py-20 sm:py-28 bg-gradient-to-b from-primary/10 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-foreground text-sm font-semibold mb-4">
            Panel
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Panel Klinik Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menerima panel insurans dan korporat yang berikut. Hubungi kami
            untuk maklumat lanjut.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-md flex items-center justify-center p-10 aspect-[16/9]">
            <Image
              src={panels[current].image}
              alt={panels[current].name}
              width={400}
              height={200}
              className="object-contain max-h-40"
            />
          </div>

          <p className="text-center mt-4 font-semibold text-foreground">
            {panels[current].name}
          </p>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-[-1rem] sm:left-[-2rem] top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-colors"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={next}
            className="absolute right-[-1rem] sm:right-[-2rem] top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-colors"
            aria-label="Seterusnya"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {panels.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Panel ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-full px-6 py-3 shadow-sm flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <p className="text-sm text-muted-foreground">
              Tidak pasti sama ada panel anda diterima? Hubungi kami untuk
              pengesahan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
