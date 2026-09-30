import { useEffect, useState } from "react";
import { AGE_KEY, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(AGE_KEY) !== "1") {
        setOpen(true);
        document.documentElement.style.overflow = "hidden";
        window.dispatchEvent(new Event("qc-gate-open"));
      }
    } catch {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-ink">
      <img
        src="/media/photos/portrait-mirror.jpg"
        alt=""
        className="absolute inset-0 h-[58%] w-full object-cover opacity-80 sm:h-[62%]"
      />
      <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-t from-ink to-ink/20 sm:h-[62%]" />
      <div className="absolute inset-x-0 bottom-0 bg-ink px-5 py-8 sm:px-10 sm:py-12">
        <p className="font-sans text-[11px] tracking-[0.28em] text-gold uppercase">{SITE.subline}</p>
        <h1 className="mt-3 max-w-2xl font-display text-5xl leading-[0.9] text-bone italic sm:text-7xl">
          adults only.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/75">
          Grown foot bois and piggies. Eighteen and over. Feet, findom, filth — no nudity, no
          minors, no tourists who can’t read.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            className="min-w-40"
            onClick={() => {
              try {
                localStorage.setItem(AGE_KEY, "1");
              } catch {
                /* ignore */
              }
              document.documentElement.style.overflow = "";
              window.dispatchEvent(new Event("qc-gate-close"));
              setOpen(false);
            }}
          >
            I am 18+
          </Button>
          <a
            href="https://www.google.com"
            className="inline-flex h-12 items-center px-2 text-xs tracking-[0.16em] text-muted uppercase"
          >
            Leave
          </a>
        </div>
      </div>
    </div>
  );
}
