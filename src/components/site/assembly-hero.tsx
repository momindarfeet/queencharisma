import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LINES = ["kneel.", "the sole.", "size 7."];

export function AssemblyHero() {
  const pin = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const hold = () => {
      if (!video) return;
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        /* not ready */
      }
    };
    video?.addEventListener("loadeddata", hold);

    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pin.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      onUpdate: (self) => {
        const v = videoRef.current;
        if (v && Number.isFinite(v.duration) && v.duration > 0) {
          v.pause();
          const t = Math.min(v.duration - 0.04, self.progress * (v.duration - 0.04));
          if (Math.abs(v.currentTime - t) > 0.025) v.currentTime = t;
        }
        const next = Math.min(LINES.length - 1, Math.floor(self.progress * LINES.length));
        setLine((prev) => (prev === next ? prev : next));
      },
    });

    return () => {
      st.kill();
      video?.removeEventListener("loadeddata", hold);
    };
  }, []);

  return (
    <section ref={pin} className="relative h-[240vh] bg-[#141210]">
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center justify-center">
        <div className="relative aspect-[9/16] h-[min(100%,calc(100vw*16/9))] w-auto max-w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src="/media/videos/louboutin-web.mp4"
            poster="/media/frames/lb-008.jpg"
            muted
            playsInline
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <div className="pointer-events-none absolute top-0 right-0 h-[46%] w-[58%] bg-gradient-to-bl from-black/45 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute top-[7%] right-[6%] w-[46%] text-right text-white">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/75">Queen of Darkness</p>
            <h1 className="mt-2 font-display text-4xl leading-[0.86] italic sm:text-6xl">{LINES[line]}</h1>
            <p className="mt-3 font-sans text-[10px] tracking-[0.2em] uppercase text-white/70">scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
}
