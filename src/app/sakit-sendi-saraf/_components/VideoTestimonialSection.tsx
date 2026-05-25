const videos = [
  {
    src: "/testimonials/sakit-sendi-saraf-1.mp4",
    poster: "/testimonials/sakit-sendi-saraf-1.jpg",
    name: "Pesakit Rawatan Sakit Lutut",
    caption:
      "Perkongsian pesakit selepas mengikuti pelan rawatan sakit lutut di Klinik Primer Cherang Bertam Putra.",
  },
  {
    src: "/testimonials/sakit-sendi-saraf-2.mp4",
    poster: "/testimonials/sakit-sendi-saraf-2.jpg",
    name: "Pesakit Pemulihan Post-Stroke",
    caption:
      "Pengalaman pemulihan selepas strok dengan bimbingan susulan doktor.",
  },
];

export default function VideoTestimonialSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Kisah Pesakit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Dengar Sendiri Daripada Pesakit Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perkongsian sebenar daripada mereka yang telah menjalani rawatan
            sakit sendi, saraf, dan pemulihan post-stroke bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <figure key={video.src} className="flex flex-col">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="font-semibold text-foreground">{video.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {video.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
