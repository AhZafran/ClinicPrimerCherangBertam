"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Sesuatu telah berlaku
        </h2>
        <p className="text-muted-foreground mb-6">
          Maaf, terdapat ralat semasa memuatkan halaman ini.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Cuba Semula
        </button>
      </div>
    </div>
  );
}
