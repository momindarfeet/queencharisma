import { Link } from "@tanstack/react-router";
import { FOOTER_NAV, NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  const links = [...NAV.slice(1), ...FOOTER_NAV].filter(
    (l, i, all) => all.findIndex((x) => x.href === l.href) === i,
  );

  return (
    <footer className="bg-ink text-bone">
      <div className="px-5 pt-20 pb-10 sm:px-8">
        <p className="font-display text-[12vw] leading-[0.8] italic sm:text-[8vw]">{SITE.short === "QC" ? SITE.name : SITE.name}</p>
        <p className="mt-8 max-w-md font-display text-2xl leading-snug italic text-gold">
          {SITE.tagline}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
          {SITE.age}. {SITE.city}. {SITE.size}. No nudity. Real. Pay to speak.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 px-5 py-8 pb-24 text-[11px] tracking-[0.16em] text-muted uppercase sm:px-8">
        {links.map((l) => (
          <Link key={l.href} to={l.href} className="hover:text-bone">
            {l.label}
          </Link>
        ))}
        <a href={SITE.xUrl} className="hover:text-bone" target="_blank" rel="noreferrer">
          X {SITE.handle}
        </a>
        <a href={SITE.whatsappUrl} className="hover:text-bone" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
