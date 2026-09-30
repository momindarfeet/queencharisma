import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { essayBySlug, ESSAYS } from "@/data/journal";

export const Route = createFileRoute("/journal/$slug")({
  component: Page,
  loader: ({ params }) => {
    const essay = essayBySlug(params.slug);
    if (!essay) throw notFound();
    return essay;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Journal"} — Queen Charisma` }],
  }),
});

function Page() {
  const essay = Route.useLoaderData();
  const more = ESSAYS.filter((e) => e.slug !== essay.slug).slice(0, 3);
  return (
    <PageShell theme="day">
      <article className="pt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-red">
            {essay.date} · {essay.tags.join(" / ")}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl">{essay.title}</h1>
          <p className="mt-6 text-lg text-ink/65">{essay.dek}</p>
        </div>
        <img src={essay.image} alt="" className="mx-auto mt-12 max-h-[80vh] w-full max-w-3xl object-cover" />
        <div className="mx-auto max-w-2xl space-y-6 px-5 py-16 sm:px-6">
          {essay.body.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </article>
      <section className="border-t border-ink/10 px-5 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {more.map((e) => (
            <Link key={e.slug} to="/journal/$slug" params={{ slug: e.slug }}>
              <img src={e.image} alt="" className="aspect-[4/5] w-full object-cover" />
              <h2 className="mt-3 font-display text-2xl">{e.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
