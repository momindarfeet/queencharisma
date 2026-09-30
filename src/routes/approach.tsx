import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { SessionForm } from "@/components/site/session-form";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/approach")({
  component: Page,
  head: () => ({ meta: [{ title: "Approach — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Pay to speak"
        title="Approach"
        dek="Build the request. Open WhatsApp. Tribute first. If you start with hey, you already lost."
        image="/media/photos/portrait-mirror.jpg"
        layout="split"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-4xl">How this works</h2>
          <ol className="mt-8 space-y-6 text-sm leading-relaxed text-bone/75">
            <li>
              <span className="text-gold">01 — </span>
              Read{" "}
              <Link to="/protocol" className="text-gold underline">
                protocol
              </Link>
              . If you can’t follow ten rules, you can’t follow my feet.
            </li>
            <li>
              <span className="text-gold">02 — </span>
              Fill the form. Service, length, budget, how filthy, the name I get to ruin.
            </li>
            <li>
              <span className="text-gold">03 — </span>
              Open WhatsApp. The message is prefilled. I reply if the energy is correct.
            </li>
            <li>
              <span className="text-gold">04 — </span>
              Tribute first. Then we play. Then maybe you get to see the soles that started
              this whole mess.
            </li>
          </ol>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted">
            Direct · {SITE.handle} · WhatsApp
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.whatsappUrl}
              className="inline-flex h-11 items-center border border-gold/40 px-5 text-[11px] uppercase tracking-[0.16em] text-gold"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={SITE.xUrl}
              className="inline-flex h-11 items-center border border-gold/40 px-5 text-[11px] uppercase tracking-[0.16em] text-gold"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </div>
        <SessionForm />
      </section>
    </PageShell>
  );
}
