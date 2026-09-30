import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { SessionForm } from "@/components/site/session-form";

const TIERS = [
  { n: 15, l: "Coffee" },
  { n: 50, l: "Nails / polish" },
  { n: 120, l: "Heels tax" },
  { n: 300, l: "Spoiled princess" },
  { n: 700, l: "Drain opener" },
  { n: 1500, l: "Silent ruin" },
];

export const Route = createFileRoute("/tribute")({
  component: Page,
  head: () => ({ meta: [{ title: "Tribute — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Devotion"
        title="Tribute"
        dek="Sending tribute is your way of showing devotion. You get nothing in return."
        image="/media/photos/tribute-devotion.jpg"
      />
      <PullQuote>You know what’s really hot? Sending out of pure obsession without being told.</PullQuote>
      <LongCopy
        paras={[
          "This is not a store. This is a chapel with a gold door. You do not buy a pic. You do not buy a minute. You buy the right to remain in the atmosphere of a girl whose soles already live in your head rent-free.",
          "Coffee reimbursement time. Line up, piggies. Human ATM is not an insult if the card works. Findom is about sending more and more to your owner — that too without asking.",
          "If you need a treat to send, you are a customer. If the send is the treat, you are mine. I prefer mine.",
        ]}
      />
      <section className="mx-auto grid max-w-5xl gap-3 px-5 pb-16 sm:grid-cols-3 sm:px-6">
        {TIERS.map((t) => (
          <div key={t.n} className="border border-gold/25 p-6 text-center">
            <p className="font-display text-4xl text-gold">${t.n}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">{t.l}</p>
          </div>
        ))}
      </section>
      <section className="border-t border-gold/20 bg-ink-2 px-5 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl">Name the amount.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Pick tribute in the form. Put the number in budget. Open WhatsApp. I still
              get nothing for you except the knowledge you were useful. Perfect.
            </p>
          </div>
          <SessionForm defaultService="tribute" />
        </div>
      </section>
    </PageShell>
  );
}
