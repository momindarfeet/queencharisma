import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { GoldMarquee } from "@/components/site/marquee";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/the-queen")({
  component: Page,
  head: () => ({ meta: [{ title: "The Queen — Queen Charisma" }] }),
});

function Page() {
  return (
    <PageShell>
      <PageHero
        kicker="Who owns you"
        title="Queen Charisma"
        dek={`${SITE.subline}. ${SITE.age}. ${SITE.city}. ${SITE.size}.`}
        image="/media/photos/portrait-mirror.jpg"
      />
      <PullQuote>Ur elegant and powerful princess. Financial domi. Living my dreams.</PullQuote>
      <LongCopy
        paras={[
          "I am not a content mill. I am a spoiled Pakistani princess with a size 7 that has ended more ‘alpha’ performances than your last three relationships combined. The bio is short because the feet do the talking: 7US. LHR. Cash queen. No nudity. Real. Pay to speak.",
          "People find me as a foot model and stay as wallets. That’s the correct order. Pretty soles, pretty toes, an arch that looks designed, Louboutins when I want the room to go quiet. You can call it fetish. I call it taste.",
          "Findom is not a game I play when I’m bored. It’s the temperature of the house. You send because looking is not free, because my time is not a public park, because a pair of feet this pretty should never have to ask twice.",
          "I will be sweet when it suits me. I will be filthy when it suits me. I will ignore you when you deserve it. The Queen of Darkness is a mood and a lighting choice and a warning: if you came for a girlfriend experience with extra toes, you came to the wrong palace.",
          "What I like: worship that shows up as tribute. Men who send without being told. Foot bois who can write a request without asking for nudes. Losers who know they’re losers and still have manners.",
          "What I don’t like: ‘hey’. Bargain hunters. Nudity asks. Second accounts after a block. Anyone who thinks deactivating will cure them. It won’t. There is no going back after a taste of these feet.",
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 sm:grid-cols-3 sm:px-6">
        {[
          { n: SITE.size, l: "US size. Enough to cover a mouth, a screen, a weak ego." },
          { n: "22", l: "Young enough to ruin you. Old enough to charge properly." },
          { n: "LHR", l: "Lahore nights. Gold mirrors. Fur rugs. Online, everywhere." },
        ].map((x) => (
          <div key={x.n} className="border border-gold/20 p-8">
            <p className="font-display text-5xl text-gold">{x.n}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{x.l}</p>
          </div>
        ))}
      </section>
      <GoldMarquee />
      <section className="px-5 py-20 text-center sm:px-6">
        <p className="mx-auto max-w-xl text-lg text-bone/75">
          Repeat after me. Charisma owns me. Then go prove it in Approach, or go stare at
          the throne until you grow a spine and a receipt.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/approach" className="inline-flex h-12 items-center bg-gold px-6 text-xs uppercase tracking-[0.18em] text-ink">
            Approach
          </Link>
          <Link to="/size-seven" className="inline-flex h-12 items-center border border-gold/40 px-6 text-xs uppercase tracking-[0.18em] text-gold">
            Size 7 specs
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
