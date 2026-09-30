import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy } from "@/components/site/long-copy";
import { SERVICES } from "@/data/services";
import { formatMoney } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: Page,
  head: () => ({ meta: [{ title: "Menu — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="House menu"
        title="The menu"
        dek="Starting rates. Real quotes happen when you approach like you can afford me. Loyal slaves only."
        layout="type"
      />
      <LongCopy
        paras={[
          "Audio. Video. Chat. Customs. Premades. Therapy. Games. Drain. I listed them in public so you can stop asking ‘u avail?’ like a stray.",
          "Numbers move. Busy nights cost more. Cheap energy costs you the door. Session for loyal slaves only — if you’ve never sent, you’re not loyal, you’re a tourist.",
        ]}
      />
      <section className="mx-auto max-w-4xl px-5 pb-24 sm:px-6">
        <div className="divide-y divide-gold/20 border border-gold/20">
          {SERVICES.map((s) => (
            <Link key={s.id} to={s.href} className="flex items-baseline justify-between gap-4 px-5 py-6 hover:bg-ink-2">
              <div>
                <h2 className="font-display text-3xl">{s.name}</h2>
                <p className="mt-1 text-sm text-muted">{s.tease}</p>
              </div>
              <p className="shrink-0 font-sans text-sm text-gold">
                from {formatMoney(s.from)}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted">
          House menu, not a contract. Tribute first. No nudity. WhatsApp after you build a
          request. I ignore menus that arrive without proof of life — meaning money.
        </p>
      </section>
    </PageShell>
  );
}
