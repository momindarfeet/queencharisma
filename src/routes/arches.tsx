import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GalleryGrid } from "@/components/site/gallery";

export const Route = createFileRoute("/arches")({
  component: Page,
  head: () => ({ meta: [{ title: "Arches — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell theme="day">
      <PageHero
        theme="day"
        kicker="The architecture"
        title="Arches"
        dek="Look at that arch. Built to rest on a loser forehead."
        image="/media/photos/look-arch.jpg"
      />
      <PullQuote theme="day">All of your fantasies end up at my perfect feet.</PullQuote>
      <LongCopy
        theme="day"
        paras={[
          "The arch is the plot twist. You came for toes, you stayed because the line of the foot does something illegal to your posture. You sit up. You lean in. You forget you’re a person with a job.",
          "I know how to show it. High, flexed, lazy, from above, from the sole, in a heel that makes the curve meaner. If you’re an arch man you already have a folder. I’m not flattered. I’m invoicing.",
          "Forehead. Phone. Floor. Those are the three approved resting places. You don’t get to pick until I say. You do get to send while you wait.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6">
        <GalleryGrid tag="arches" />
      </section>
    </PageShell>
  );
}
