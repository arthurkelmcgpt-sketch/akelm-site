import Image from "next/image";

export default function AkelMedSalesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <Image
        src="/images/akelmed-sales-bkg-3.png"
        alt="Background da página AkelMed"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,255,255,0.07), rgba(255,255,255,0.02) 36%, rgba(15,23,42,0.03) 70%, rgba(15,23,42,0.08))",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 18%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0.01) 78%, rgba(255,255,255,0.03) 100%)",
        }}
      />
      <div className="absolute inset-0 border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
    </main>
  );
}
