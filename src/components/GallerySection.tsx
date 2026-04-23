"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/galleri/481014597_10161949830034526_3903573968964557889_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 1" },
  { src: "/galleri/481026720_10161949829519526_1053280168783787199_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 2" },
  { src: "/galleri/481162409_10161949830139526_6175129719238949123_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 3" },
  { src: "/galleri/481186961_10161949829874526_4906739200345312439_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 4" },
  { src: "/galleri/481661092_10161949829909526_7690857192485369893_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 5" },
  { src: "/galleri/481897587_10161949829739526_898914102507519276_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 6" },
  { src: "/galleri/482006798_122121268166697429_7704071132924743485_n.jpg", alt: "Galeri Klinik Primer Cherang Bertam Putra 7" },
];

const GAP = 16;

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    function update() {
      setCount(window.innerWidth < 768 ? 1 : 3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function GallerySection() {
  const visible = useVisibleCount();
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = images.length - visible;

  // Reset index when visible count changes
  useEffect(() => {
    setStartIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setStartIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setStartIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  return (
    <section
      id="galleri"
      className="py-20 sm:py-28 bg-gradient-to-b from-muted/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Galeri Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat suasana dan kemudahan di Klinik Primer Cherang Bertam Putra.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(-${startIndex} * (100% / ${visible} + ${GAP}px * ${visible - 1} / ${visible})))`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    width: `calc((100% - ${(visible - 1) * GAP}px) / ${visible})`,
                  }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          {startIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
          )}

          {/* Right arrow */}
          {startIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Seterusnya"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
