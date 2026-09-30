import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GalleryGrid } from "@/components/site/gallery";

export const Route = createFileRoute("/soles")({
  component: Page,
  head: () => ({ meta: [{ title: "Soles — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell theme="day">
      <PageHero
        theme="day"
        kicker="The pale religion"
        title="Soles"
        dek="Buttery. Brighter than ur gf’s face. Dirty when I want them that way."
        image="/media/photos/soles-brighter.jpg"
      />
      <PullQuote theme="day">Turn your brain off and stare.</PullQuote>
      <LongCopy
        theme="day"
        paras={[
          "This is the room most of you actually live in. Not the heels, not the jokes — the sole. Pale, mapped, a little shiny in the light, soft enough to make a grown man forget his name and his rent.",
          "I know what you do with these photos. You zoom. You rate. You send them to other degenerates like a cult pamphlet. Cute. None of that licks the dirt off. None of that pays for the pedicure. None of that gets you closer than the glass.",
          "Dirty soles are a personality test. Some of you want them freshly washed, princess-clean, pressed to a phone screen. Some of you want the day on them. Both of you will still send. Both of you will still not be allowed to clean them unless it’s a session.",
          "If you came here to ‘just appreciate the aesthetic’, congratulations on the lie. Your eyes already told on you. Team soles. Obviously.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <GalleryGrid tag="soles" />
      </section>
      <section className="px-5 pb-24 text-center sm:px-6">
        <Link to="/approach" className="inline-flex h-12 items-center bg-red px-8 text-xs uppercase tracking-[0.18em] text-bone">
          Book soles on cam
        </Link>
      </section>
    </PageShell>
  );
}
