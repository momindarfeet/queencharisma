import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/site";

const LINES = [
  { at: 0, text: "kneel." },
  { at: 0.28, text: "louboutin." },
  { at: 0.55, text: "size 7." },
  { at: 0.8, text: "brighter." },
];

export function AssemblyHero() {
  const pin = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [line, setLine] = useState(LINES[0].text);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pin.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const next = [...LINES].reverse().find((l) => self.progress >= l.at);
        if (next) setLine(next.text);
        const v = videoRef.current;
        if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return;
        if (self.progress < 0.015) {
          if (v.paused) void v.play().catch(() => {});
          return;
        }
        v.pause();
        const t = Math.min(v.duration - 0.05, self.progress * (v.duration - 0.05));
        if (Math.abs(v.currentTime - t) > 0.035) v.currentTime = t;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section ref={pin} className="relative h-[160vh] bg-ink">
      <div className="sticky top-14 grid h-[calc(100svh-3.5rem)] grid-rows-[minmax(0,1fr)_auto] bg-ink lg:grid-cols-[minmax(280px,22rem)_minmax(0,1fr)] lg:grid-rows-1">
        <div className="relative min-h-0 overflow-hidden lg:order-2">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
            src="/media/videos/louboutin-web.mp4"
            poster="/media/frames/lb-008.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="flex flex-col justify-end bg-ink px-5 pt-5 pb-6 sm:px-7 lg:order-1 lg:justify-between lg:py-10">
          <p className="hidden font-sans text-[11px] tracking-[0.22em] text-gold uppercase lg:block">
            {SITE.subline}
          </p>
          <div>
            <p className="font-sans text-[10px] tracking-[0.22em] text-gold uppercase">
              {SITE.handle} · 7 US
            </p>
            <h1 className="mt-2 font-display text-[3.5rem] leading-[0.84] text-bone italic sm:text-7xl lg:text-[5.6rem]">
              {line}
            </h1>
            <p className="mt-3 font-display text-lg text-bone/80 italic">Are you a Louboutin lover?</p>
            <p className="mt-4 font-sans text-[11px] tracking-[0.2em] text-red uppercase">scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
}
