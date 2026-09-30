import { cn } from "@/lib/utils";

export function LongCopy({
  paras,
  theme = "night",
}: {
  paras: string[];
  theme?: "night" | "day";
}) {
  return (
    <div className="mx-auto max-w-xl space-y-6 px-5 py-16 sm:px-8 sm:py-24">
      {paras.map((p, i) => (
        <p
          key={p.slice(0, 32)}
          className={cn(
            "text-[1.05rem] leading-[1.7]",
            theme === "night" ? "text-bone/80" : "text-ink/80",
            i === 0 && "font-display text-2xl leading-snug italic sm:text-3xl",
          )}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function PullQuote({
  children,
  theme = "night",
}: {
  children: React.ReactNode;
  theme?: "night" | "day";
}) {
  return (
    <blockquote
      className={cn(
        "mx-auto max-w-[1100px] px-5 py-8 text-left font-display text-4xl leading-[0.95] italic sm:px-8 sm:text-6xl",
        theme === "night" ? "text-bone" : "text-ink",
      )}
    >
      {children}
    </blockquote>
  );
}
