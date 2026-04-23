import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Halaman Tidak Dijumpai
        </h2>
        <p className="text-muted-foreground mb-6">
          Maaf, halaman yang anda cari tidak wujud.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Kembali ke Utama
        </Link>
      </div>
    </div>
  );
}
