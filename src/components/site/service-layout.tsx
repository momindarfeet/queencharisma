import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy, PullQuote } from "@/components/site/long-copy";
import { SessionForm } from "@/components/site/session-form";
import { GalleryGrid } from "@/components/site/gallery";
import { SERVICES, type Service } from "@/data/services";
import { formatMoney } from "@/lib/utils";

export function ServiceLayout({
  service,
  image,
  tag,
  extra,
}: {
  service: Service;
  image: string;
  tag?: "soles" | "toes" | "heels" | "night";
  extra?: React.ReactNode;
}) {
  return (
    <PageShell theme="night">
      <PageHero kicker="The menu" title={service.name} dek={service.short} image={image} />
      <PullQuote>{service.tease}</PullQuote>
      <LongCopy paras={service.body} />

      <section className="px-5 pb-8 sm:px-8">
        <div className="grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(4.5rem,12vw,9rem)] leading-none tracking-tight">
              {formatMoney(service.from)}
            </p>
            <p className="mt-2 text-sm text-muted">from / {service.unit}. Numbers move when I’m bored or busy.</p>
            <ul className="mt-10 max-w-md space-y-2 text-sm leading-relaxed text-bone/75">
              {service.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
              {service.rules.join(" ")}
            </p>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Request</p>
            <h2 className="mt-3 font-display text-4xl italic">Build it. Send it.</h2>
            <p className="mt-3 mb-8 text-sm text-muted">
              Opens WhatsApp with your confession filled in. Read{" "}
              <Link to="/protocol" className="underline decoration-red underline-offset-4">
                protocol
              </Link>{" "}
              first.
            </p>
            <SessionForm defaultService={service.id} />
          </div>
        </div>
      </section>

      {extra}

      {tag ? (
        <section className="px-5 py-16 sm:px-8">
          <GalleryGrid tag={tag} limit={6} />
        </section>
      ) : null}

      <section className="flex flex-wrap gap-x-8 gap-y-3 px-5 py-14 text-[12px] tracking-[0.14em] text-muted uppercase sm:px-8">
        {SERVICES.filter((s) => s.id !== service.id).map((s) => (
          <Link key={s.id} to={s.href} className="hover:text-bone">
            {s.name}
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
