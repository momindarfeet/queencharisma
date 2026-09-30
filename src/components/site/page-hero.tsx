import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  dek,
  image,
  theme = "night",
}: {
  kicker: string;
  title: string;
  dek: string;
  image?: string;
  theme?: "night" | "day";
  layout?: "split" | "bleed" | "type";
}) {
  const night = theme === "night";
  const tone = night ? "bg-ink text-bone" : "bg-paper text-ink";
  const kickerCls = night ? "text-gold" : "text-red";
  const titleCls = night ? "text-bone" : "text-ink";
  const dekCls = night ? "text-bone/70" : "text-ink/70";

  if (!image) {
    return (
      <section className={cn("px-5 pt-28 pb-12 sm:px-8 sm:pt-32", tone)}>
        <p className={cn("text-[11px] tracking-[0.28em] uppercase", kickerCls)}>{kicker}</p>
        <h1 className={cn("mt-5 max-w-5xl font-display text-6xl leading-[0.88] italic sm:text-8xl", titleCls)}>
          {title}
        </h1>
        <p className={cn("mt-8 max-w-md text-base leading-relaxed", dekCls)}>{dek}</p>
      </section>
    );
  }

  return (
    <section className={cn("pt-16", tone)}>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[70vh] lg:py-20">
          <p className={cn("text-[11px] tracking-[0.28em] uppercase", kickerCls)}>{kicker}</p>
          <h1 className={cn("mt-4 max-w-xl font-display text-5xl leading-[0.9] italic sm:text-7xl", titleCls)}>
            {title}
          </h1>
          <p className={cn("mt-6 max-w-md text-base leading-relaxed", dekCls)}>{dek}</p>
        </div>
        <div className="min-h-[42vh] overflow-hidden lg:min-h-[70vh]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
