import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GalleryGrid } from "@/components/site/gallery";

const SPECS = [
  { k: "US", v: "7" },
  { k: "UK", v: "4.5–5" },
  { k: "EU", v: "37–38" },
  { k: "Vibe", v: "Pretty. Mean. Expensive." },
  { k: "Soles", v: "Pale, buttery, brighter than her face" },
  { k: "Toes", v: "Stacked, feedable, camera-ready" },
  { k: "Arch", v: "High enough to ruin your week" },
  { k: "Heels", v: "Louboutin-coded, strap-friendly" },
  { k: "Nails", v: "Nude / pink / grey — her mood" },
  { k: "Rule", v: "No nudity. Real. Pay to speak." },
];

export const Route = createFileRoute("/size-seven")({
  component: Page,
  head: () => ({ meta: [{ title: "Size 7 — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell theme="day">
      <PageHero
        theme="day"
        kicker="Spec sheet"
        title="Size 7"
        dek="The only measurements that matter. 7US. Enough to cover a mouth and a weak story about being straight."
        image="/media/photos/look-arch.jpg"
      />
      <PullQuote theme="day">Your eyes go straight to my pretty feet and expose your alpha man facade.</PullQuote>
      <LongCopy
        theme="day"
        paras={[
          "Men ask for size like it’s a secret handshake. Fine. 7 US. Small enough to look dainty on a fur stool, big enough to plant on your chest and still have toes left over for your mouth.",
          "This page exists because you wanted a catalogue and I wanted a throne. Specs without tribute are just fan fiction. Read them. Then go buy something that fits — me, not you.",
        ]}
      />
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-6">
        <dl className="divide-y divide-ink/10 border border-ink/10">
          {SPECS.map((s) => (
            <div key={s.k} className="flex items-baseline justify-between gap-4 px-5 py-4">
              <dt className="text-[11px] uppercase tracking-[0.2em] text-red">{s.k}</dt>
              <dd className="text-right font-display text-xl">{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <GalleryGrid tag="soles" limit={6} />
      </section>
      <section className="px-5 pb-24 text-center sm:px-6">
        <Link to="/approach" className="inline-flex h-12 items-center bg-red px-8 text-xs uppercase tracking-[0.18em] text-bone">
          Fit check via WhatsApp
        </Link>
      </section>
    </PageShell>
  );
}
