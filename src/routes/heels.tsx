import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GalleryGrid } from "@/components/site/gallery";
import { VIDEOS } from "@/data/media";

export const Route = createFileRoute("/heels")({
  component: Page,
  head: () => ({ meta: [{ title: "Heels — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Red bottoms"
        title="Heels"
        dek="Are you a Louboutin lover? Clear straps. Grey polish. Total dominance."
        image="/media/photos/clear-straps.jpg"
      />
      <PullQuote>Yes you can call them your gf. Now go buy a nice pair of heels and say thank you.</PullQuote>
      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-6">
        <video
          className="w-full"
          src={VIDEOS[0].src}
          poster={VIDEOS[0].poster}
          controls
          playsInline
          muted
          loop
        />
      </section>
      <LongCopy
        paras={[
          "Heels are how I remind you this is not a bedroom accidentally. This is a house with taste. Louboutin red is not a colour, it’s a verdict. If you know, you already owe a pair. If you don’t know, sit down and watch the clip until you do.",
          "Clear straps. Grey nails. The kind of shoe that makes a foot look expensive even when I’m just standing in my own hallway. You would massage them while I drive. You would. Don’t get cute.",
          "Girlfriend day is still my day. You can call my feet your gf if you fund the wardrobe. I don’t do cheap rubber. I do red, I do strap, I do the slow dangle that makes your week evaporate.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <GalleryGrid tag="heels" />
      </section>
      <section className="px-5 pb-24 text-center sm:px-6">
        <Link to="/tribute" className="inline-flex h-12 items-center bg-gold px-8 text-xs uppercase tracking-[0.18em] text-ink">
          Heels tax
        </Link>
      </section>
    </PageShell>
  );
}
