import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { PROTOCOL } from "@/data/court";

export const Route = createFileRoute("/protocol")({
  component: Page,
  head: () => ({ meta: [{ title: "Protocol — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="House law"
        title="Protocol"
        dek="Manners, even when you’re filthy. Tribute first. No nudity. Blocks are final."
        image="/media/photos/wednesday-owner.jpg"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
        <ol className="space-y-12">
          {PROTOCOL.map((r) => (
            <li key={r.n}>
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">{r.n}</p>
              <h2 className="mt-2 font-display text-4xl">{r.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-bone/75">{r.body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/approach"
          className="mt-16 inline-flex h-12 items-center bg-gold px-8 text-xs uppercase tracking-[0.18em] text-ink"
        >
          I understand. Approach.
        </Link>
      </section>
    </PageShell>
  );
}
