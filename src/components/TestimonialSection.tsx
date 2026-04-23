"use client";

import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Syarifah Furaih",
    text: "Saya sangat berpuas hati dengan servis di Primer Cherang Klinik Bertam Putra. Staff di sini sangat baik, mesra dan sentiasa membantu dalam setiap urusan. Persekitaran klinik juga sangat bersih, kemas dan selesa. Secara keseluruhan, memang highly recommended untuk sesiapa yang mencari klinik dengan servis terbaik.",
    rating: 5,
  },
  {
    name: "Kizz Ly",
    text: "The service is very good, the staff is friendly and the doctor explains clearly. The place is clean and comfortable. Recommended!",
    rating: 5,
  },
  {
    name: "NR Property",
    text: "Doctor and staff are very friendly, very good service, very satisfied with the service provided to patients, very friendly... Will repeat!",
    rating: 5,
  },
  {
    name: "Shaqib Arsalan",
    text: "Terbaik. Doktor explain details. Klinik sejuk selesa. Staf semua friendly layanan baik.",
    rating: 5,
  },
  {
    name: "Namie Hakim",
    text: "Klinik sangat selesa dan Doc & staff mesra.",
    rating: 5,
  },
  {
    name: "Ilya Maisarah",
    text: "The best clinic ever. The staff and doctors are kind. The clinic is clean and fragrant.",
    rating: 5,
  },
  {
    name: "Nur Sadrina",
    text: "The staff was friendly and the doctor was very helpful. He was very gentle and gave a full explanation of our condition. Highly recommended.",
    rating: 5,
  },
  {
    name: "Wawa Abrzk",
    text: "Dr Fazliana baik soft spoken dan sangat menbantu dalam masaalah kesihatan kita. Klinik bersih dan selesa.",
    rating: 5,
  },
  {
    name: "Rafiqah Hanum",
    text: "Absolutely the best. Dr. Faz convinced me and treated me so well. The staff was very attentive and the service was friendly.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pesakit Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pesakit adalah keutamaan kami. Berikut adalah pengalaman
            mereka bersama kami.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-8 px-8 sm:px-12">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Pesakit</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

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
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Testimoni ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
