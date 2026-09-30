import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { AssemblyHero } from "@/components/site/assembly-hero";
import { GoldMarquee } from "@/components/site/marquee";
import { PHOTOS, VIDEOS } from "@/data/media";
import { SERVICES } from "@/data/services";
import { ESSAYS } from "@/data/journal";
import { COURT } from "@/data/court";
import { SITE } from "@/lib/site";
import { formatMoney } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Queen Charisma — Queen of Darkness" }],
  }),
});

function Home() {
  return (
    <PageShell>
      <AssemblyHero />

      <section className="relative z-10 min-h-[calc(100svh-4.25rem)] bg-paper text-ink">
        <div className="grid min-h-[calc(100svh-4.25rem)] sm:grid-cols-2">
          <div className="min-h-[46vh] overflow-hidden sm:min-h-full">
            <img
              src="/media/photos/portrait-mirror.jpg"
              alt="Queen Charisma"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-paper px-5 py-14 sm:px-10 lg:px-14">
            <p className="text-[11px] tracking-[0.24em] text-red uppercase">
              {SITE.age} · {SITE.city} · {SITE.size}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.9] italic sm:text-6xl">
              foot mistress.
              <br />
              cash queen.
              <br />
              not your gf.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
              Elegant and powerful princess. Financial domi. Living my dreams. You live in them.
              Hello foot bois — kiss my feet and show some love, which is a polite way of saying
              send. No nudity. Real.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/approach" className="inline-flex h-12 items-center bg-red px-6 text-[11px] tracking-[0.16em] text-paper uppercase">
                Approach
              </Link>
              <Link to="/the-throne" className="inline-flex h-12 items-center text-[11px] tracking-[0.16em] uppercase underline decoration-red/70 underline-offset-4">
                The throne
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <GoldMarquee invert />
      </div>

      <section className="relative z-10 bg-ink py-12">
        <div className="flex items-end justify-between px-5 sm:px-8">
          <p className="font-display text-3xl italic sm:text-5xl">stare like you paid.</p>
          <Link to="/the-throne" className="hidden text-[11px] tracking-[0.18em] text-gold uppercase sm:block">
            Full gallery
          </Link>
        </div>
        <div className="mt-8 flex gap-3 overflow-x-auto px-5 pb-6 sm:px-8">
          {PHOTOS.slice(0, 8).map((p) => (
            <figure key={p.id} className="w-56 shrink-0 sm:w-72">
              <img src={p.src} alt={p.alt} className="aspect-[3/4] w-full object-cover" />
              <figcaption className="mt-2 font-display text-base italic">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-paper px-5 py-20 text-ink sm:px-8">
        <p className="text-[11px] tracking-[0.24em] text-red uppercase">The menu</p>
        <h2 className="mt-3 max-w-xl font-display text-5xl italic sm:text-6xl">pay to speak.</h2>
        <div className="mt-12 divide-y divide-ink/10">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to={s.href}
              className="grid gap-1 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h3 className="font-display text-3xl italic sm:text-4xl">{s.name}</h3>
                <p className="mt-1 max-w-md text-sm text-ink/55">{s.tease}</p>
              </div>
              <p className="font-sans text-sm text-red">{formatMoney(s.from)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-ink">
        <div className="grid min-h-[calc(100svh-4.25rem)] sm:grid-cols-2">
          <div className="min-h-[46vh] overflow-hidden sm:min-h-full">
            <video
              className="h-full w-full object-cover"
              src={VIDEOS[0].src}
              poster={VIDEOS[0].poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10">
            <p className="text-[11px] tracking-[0.22em] text-gold uppercase">Motion</p>
            <h2 className="mt-3 font-display text-5xl italic">Louboutin lover?</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/75">
              Red bottoms as religion. I dangle, flex, and let the shoe assemble on the way in.
            </p>
            <Link
              to="/heels"
              className="mt-6 inline-block text-[11px] tracking-[0.16em] uppercase underline decoration-red underline-offset-4"
            >
              The heels room
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-paper text-ink">
        <div className="grid lg:grid-cols-12">
          <div className="px-5 py-16 sm:px-8 lg:col-span-5">
            <p className="text-[11px] tracking-[0.24em] text-red uppercase">Journal</p>
            <h2 className="mt-3 font-display text-5xl italic">captions that became scripture.</h2>
            <Link
              to="/journal"
              className="mt-8 inline-block text-[11px] tracking-[0.16em] uppercase underline decoration-red underline-offset-4"
            >
              Read the house
            </Link>
          </div>
          <div className="lg:col-span-7">
            {ESSAYS.slice(0, 5).map((e) => (
              <Link
                key={e.slug}
                to="/journal/$slug"
                params={{ slug: e.slug }}
                className="flex items-center gap-5 border-t border-ink/10 px-5 py-5 sm:px-8"
              >
                <img src={e.image} alt="" className="size-16 shrink-0 object-cover sm:size-20" />
                <div className="min-w-0">
                  <p className="text-[11px] tracking-[0.16em] text-red uppercase">{e.date}</p>
                  <h3 className="mt-1 font-display text-xl leading-snug italic sm:text-2xl">{e.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ink px-5 py-24 sm:px-10">
        <p className="text-[11px] tracking-[0.24em] text-gold uppercase">The court</p>
        <blockquote className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] italic sm:text-6xl">
          {COURT[0].text}
        </blockquote>
        <p className="mt-8 text-[11px] tracking-[0.18em] text-muted uppercase">
          {COURT[0].name} — {COURT[0].role}
        </p>
        <Link to="/court" className="mt-10 inline-block text-[11px] tracking-[0.16em] text-gold uppercase">
          More confessions
        </Link>
      </section>

      <section className="relative z-10 bg-red px-5 py-24 text-paper sm:px-10">
        <p className="text-[11px] tracking-[0.24em] uppercase opacity-80">Last door</p>
        <h2 className="mt-4 font-display text-7xl leading-[0.85] italic sm:text-9xl">kneel.</h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/80">
          Build a request. Open WhatsApp. Tribute first. If you’re still reading, you’re already late.
        </p>
        <Link
          to="/approach"
          className="mt-10 inline-flex h-12 items-center bg-paper px-8 text-xs tracking-[0.18em] text-ink uppercase"
        >
          Approach the queen
        </Link>
      </section>
    </PageShell>
  );
}
