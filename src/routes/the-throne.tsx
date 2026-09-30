import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { GalleryGrid } from "@/components/site/gallery";
import { LongCopy } from "@/components/site/long-copy";

export const Route = createFileRoute("/the-throne")({
  component: Page,
  head: () => ({ meta: [{ title: "The Throne — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Gallery"
        title="The throne"
        dek="Soles. Toes. Arches. Heels. Mirror. Night. Filter if you have a favourite way to be ruined."
        image="/media/photos/kick-balls.jpg"
      />
      <LongCopy
        paras={[
          "This is not a dump. This is the public wing of a private obsession. Every still here already lived on my X. You stared there for free until the caption billed you. Same energy, better lighting, house rules.",
          "Tap a photo. Read the line. If your first thought is ‘I want to taste that’, your second thought should be tribute. Looking is the cheap part. Being allowed to keep looking is the product.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6">
        <GalleryGrid showFilters />
      </section>
    </PageShell>
  );
}
