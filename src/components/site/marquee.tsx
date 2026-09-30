import { MARQUEE } from "@/lib/site";

export function GoldMarquee({ invert = false }: { invert?: boolean }) {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className={
        invert
          ? "overflow-hidden border-y border-ink/10 bg-paper py-5 text-ink"
          : "overflow-hidden border-y border-white/10 bg-ink py-5 text-gold"
      }
    >
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={t + i} className="font-display text-3xl tracking-tight italic sm:text-5xl">
            {t}
            <span className="mx-5 text-red">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
