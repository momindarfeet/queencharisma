import { useEffect, useState } from "react";
import { PHOTOS, photosByTag, type Tag } from "@/data/media";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const FILTERS: { id: Tag | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "soles", label: "Soles" },
  { id: "toes", label: "Toes" },
  { id: "arches", label: "Arches" },
  { id: "heels", label: "Heels" },
  { id: "mirror", label: "Mirror" },
  { id: "night", label: "Night" },
];

export function GalleryGrid({
  tag = "all",
  limit,
  showFilters = false,
}: {
  tag?: Tag | "all";
  limit?: number;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<Tag | "all">(tag);
  const [open, setOpen] = useState<number | null>(null);
  const list = photosByTag(showFilters ? filter : tag).slice(0, limit ?? 999);
  const active = open != null ? list[open] : undefined;

  useEffect(() => {
    if (open == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i == null ? 0 : (i + 1) % list.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i == null ? 0 : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, list.length]);

  return (
    <>
      {showFilters ? (
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "h-10 text-[12px] tracking-[0.14em] uppercase",
                filter === f.id ? "text-red" : "text-muted hover:text-current",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className="photo-zoom mb-3 block w-full break-inside-avoid text-left"
            onClick={() => setOpen(i)}
          >
            <img src={p.src} alt={p.alt} className="w-full object-cover" />
            <p className="mt-2 font-display text-lg leading-snug italic">{p.caption}</p>
          </button>
        ))}
      </div>

      {active && open != null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/94 p-4"
          onClick={() => setOpen(null)}
          role="presentation"
        >
          <button
            type="button"
            className="absolute top-4 right-4 size-12 text-paper"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <X />
          </button>
          <button
            type="button"
            className="absolute top-1/2 left-2 size-12 -translate-y-1/2 text-paper"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + list.length) % list.length);
            }}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-2 size-12 -translate-y-1/2 text-paper"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % list.length);
            }}
          >
            <ChevronRight />
          </button>
          <figure
            className="max-h-[90vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <img src={active.src} alt={active.alt} className="max-h-[70vh] w-full object-contain" />
            <figcaption className="mt-4 font-display text-2xl text-bone italic">
              {active.caption}
            </figcaption>
            <p className="mt-2 text-sm text-muted">{active.quote}</p>
            <p className="mt-3 font-sans text-[11px] tracking-[0.16em] text-muted uppercase">
              {open + 1} / {list.length}
            </p>
          </figure>
        </div>
      ) : null}
    </>
  );
}
