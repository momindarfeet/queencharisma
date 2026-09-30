import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FOOTER_NAV, NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const PREVIEWS: Record<string, string> = {
  "/": "/media/photos/portrait-mirror.jpg",
  "/the-queen": "/media/photos/portrait-mirror.jpg",
  "/the-throne": "/media/photos/kick-balls.jpg",
  "/soles": "/media/photos/soles-brighter.jpg",
  "/toes": "/media/photos/pink-toes-stack.jpg",
  "/heels": "/media/photos/clear-straps.jpg",
  "/motion": "/media/frames/lb-020.jpg",
  "/menu": "/media/photos/available-paid.jpg",
  "/tribute": "/media/photos/tribute-devotion.jpg",
  "/journal": "/media/photos/eyes-straight.jpg",
  "/approach": "/media/photos/sole-blessing.jpg",
  "/games": "/media/photos/kick-balls.jpg",
  "/arches": "/media/photos/look-arch.jpg",
  "/size-seven": "/media/photos/look-arch.jpg",
};

const INDEX = [...NAV, ...FOOTER_NAV].filter(
  (item, i, all) => all.findIndex((x) => x.href === item.href) === i,
);

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState("/the-throne");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const preview = PREVIEWS[hover] ?? PREVIEWS["/the-throne"];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:h-[4.25rem] sm:px-7">
          <Link to="/" className="font-display text-[1.65rem] leading-none text-paper italic" onClick={() => setOpen(false)}>
            {SITE.name}
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/approach"
              className="hidden font-sans text-[11px] tracking-[0.18em] text-paper uppercase sm:inline"
            >
              Approach
            </Link>
            <button
              type="button"
              aria-label={open ? "Close index" : "Open index"}
              className="font-sans text-[11px] tracking-[0.18em] text-paper uppercase"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Index"}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[55] bg-ink text-bone">
          <div className="flex h-full flex-col lg:grid lg:grid-cols-12">
            <nav className="flex-1 overflow-y-auto px-5 pt-24 pb-16 sm:px-8 lg:col-span-6 lg:pt-28">
              {INDEX.map((item) => (
                <Link
                  key={item.href + item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHover(item.href)}
                  className={cn(
                    "block py-2 font-display text-4xl leading-none italic transition-[color,letter-spacing] duration-200 sm:text-5xl",
                    pathname === item.href ? "text-red" : "text-bone hover:text-red",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="relative hidden lg:col-span-6 lg:block">
              <img src={preview} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink/25" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
