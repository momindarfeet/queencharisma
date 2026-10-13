import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AssemblyHero() {
  const pin = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pin.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.35,
      onUpdate: (self) => {
        const v = videoRef.current;
        if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return;
        if (self.progress < 0.012) {
          if (v.paused) void v.play().catch(() => {});
          return;
        }
        v.pause();
        const t = Math.min(v.duration - 0.04, self.progress * (v.duration - 0.04));
        if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section ref={pin} className="relative h-[145vh] bg-[#efe8dc]">
      <div className="sticky top-14 h-[calc(100svh-3.5rem)]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
          src="/media/videos/louboutin-web.mp4"
          poster="/media/frames/lb-018.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
