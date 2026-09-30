import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { ESSAYS } from "@/data/journal";

export const Route = createFileRoute("/journal")({
  component: Page,
  head: () => ({ meta: [{ title: "Journal — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell theme="day">
      <PageHero
        theme="day"
        kicker="Scripture"
        title="Journal"
        dek="Her posts, stretched into essays. Filthier. Longer. Still true."
        image="/media/photos/eyes-straight.jpg"
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6">
        <div className="grid gap-12">
          {ESSAYS.map((e) => (
            <Link key={e.slug} to="/journal/$slug" params={{ slug: e.slug }} className="grid gap-6 sm:grid-cols-[200px_1fr] sm:items-center">
              <img src={e.image} alt="" className="aspect-[4/5] w-full object-cover" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-red">{e.date}</p>
                <h2 className="mt-2 font-display text-4xl leading-tight">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.dek}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
