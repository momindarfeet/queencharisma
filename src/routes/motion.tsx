import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy } from "@/components/site/long-copy";
import { VIDEOS } from "@/data/media";

export const Route = createFileRoute("/motion")({
  component: Page,
  head: () => ({ meta: [{ title: "Motion — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Clips"
        title="Motion"
        dek="Dangling. Bow down. Instructions with the sound on. Triggered yet?"
        image="/media/frames/lb-020.jpg"
      />
      <LongCopy
        paras={[
          "Stills are for the hungry. Motion is for the possessed. I dangle, I flex, I put a Louboutin through a four-second spell and watch you loop it like a hymn.",
          "Sound on when I say so. Follow the instructions. If a clip doesn’t trigger you, you’re lying to the only person in the room — and I’m not even in the room.",
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 sm:px-6 md:grid-cols-2">
        {VIDEOS.map((v) => (
          <article key={v.id}>
            <video
              className="aspect-[9/16] w-full bg-ink-2 object-cover md:aspect-[3/4]"
              src={v.src}
              poster={v.poster}
              controls
              playsInline
              preload="metadata"
            />
            <h2 className="mt-4 font-display text-3xl">{v.title}</h2>
            <p className="mt-2 text-sm text-muted">
              {v.caption} · {v.duration}
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
