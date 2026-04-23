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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),rgba(255,255,255,0.02)_36%,rgba(15,23,42,0.03)_70%,rgba(15,23,42,0.08))]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_18%,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.02)_60%,rgba(255,255,255,0.01)_78%,rgba(255,255,255,0.03)_100%)] opacity-50" />
      <div className="absolute inset-0 border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
    </main>
  );
}
