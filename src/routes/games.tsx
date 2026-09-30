import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { SessionForm } from "@/components/site/session-form";
import { DiceGame, RedGreen } from "@/components/site/play";
import { serviceById } from "@/data/services";

export const Route = createFileRoute("/games")({
  component: Page,
  head: () => ({ meta: [{ title: "Games — Queen Charisma" }] }),
});

function Page() {
  const s = serviceById("games")!;
  return (
    <PageShell>
      <PageHero
        kicker="Play"
        title="Games"
        dek="Cards. Red / green. Dice. Play stupid games, lose real money."
        image="/media/photos/kick-balls.jpg"
      />
      <section className="grid gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <DiceGame />
        <RedGreen />
      </section>
      <section className="bg-paper px-5 py-20 text-ink sm:px-8">
        <div className="grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl italic">{s.tease}</h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink/70">
              {s.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link to="/protocol" className="mt-8 inline-block text-[11px] tracking-[0.16em] uppercase underline decoration-red underline-offset-4">
              Protocol first
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SessionForm defaultService="games" theme="day" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
