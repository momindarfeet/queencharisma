import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GalleryGrid } from "@/components/site/gallery";

export const Route = createFileRoute("/toes")({
  component: Page,
  head: () => ({ meta: [{ title: "Toes — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell theme="day">
      <PageHero
        theme="day"
        kicker="Pretty weapons"
        title="Toes"
        dek="Shall I feed your mouth? Toes for your nose. Pink, nude, stacked, unimpressed."
        image="/media/photos/pink-toes-stack.jpg"
      />
      <PullQuote theme="day">Open. Don’t chew. Don’t think.</PullQuote>
      <LongCopy
        theme="day"
        paras={[
          "Pretty toes are how I walk into a brain and rearrange the furniture. Stacked. Polished. Close enough to the lens that you can count them like a prayer you don’t deserve to finish.",
          "Team toes people are specific. You want them in your mouth, on your nose, on a glass, dangling while I scroll my phone and ignore your little noises. I can do that. I can also do it while you send. Guess which version I prefer.",
          "I switch polish when I want. Grey. Pink. Nude. You don’t get a favourite colour until you pay to have an opinion. Even then I might ignore it. Princess privilege. Get used to it.",
          "If I feed you, pride goes first. If I let you sniff, that’s a session, not a sample. If you only came to vote team toes or team soles — tribute is still due for wasting the ballot.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <GalleryGrid tag="toes" />
      </section>
      <section className="px-5 pb-24 text-center sm:px-6">
        <Link to="/customs" className="inline-flex h-12 items-center bg-red px-8 text-xs uppercase tracking-[0.18em] text-bone">
          Custom toes
        </Link>
      </section>
    </PageShell>
  );
}
