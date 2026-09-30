import { useEffect, useRef, useState, type ComponentType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSEMBLY_FRAME_COUNT, assemblyFrame } from "@/data/media";
import { SITE } from "@/lib/site";

const LINES = [
  { at: 0, text: "kneel." },
  { at: 0.18, text: "size 7." },
  { at: 0.38, text: "brighter than ur gf’s face." },
  { at: 0.62, text: "pay to speak." },
  { at: 0.84, text: "queen of darkness." },
];

export function AssemblyHero() {
  const pin = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress = useRef(0);
  const current = useRef(0);
  const frames = useRef<HTMLImageElement[]>([]);
  const [line, setLine] = useState(LINES[0].text);
  const [Shards, setShards] = useState<ComponentType<{
    progress: React.MutableRefObject<number>;
  }> | null>(null);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= ASSEMBLY_FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = assemblyFrame(i);
      imgs.push(img);
    }
    frames.current = imgs;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 720;
    if (!reduce && !small) {
      void import("./assembly-shards").then((m) => setShards(() => m.AssemblyShards));
    }

    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pin.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.7,
      onUpdate: (self) => {
        progress.current = self.progress;
        const L = [...LINES].reverse().find((l) => self.progress >= l.at);
        if (L) setLine(L.text);
      },
    });

    let raf = 0;
    const draw = () => {
      const c = canvasRef.current;
      const ctx = c?.getContext("2d");
      if (c && ctx) {
        const target = progress.current * (ASSEMBLY_FRAME_COUNT - 1);
        current.current += (target - current.current) * 0.14;
        const idx = Math.max(0, Math.min(ASSEMBLY_FRAME_COUNT - 1, Math.round(current.current)));
        const img = frames.current[idx];
        const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
        const w = c.clientWidth;
        const h = c.clientHeight;
        if (w && h && (c.width !== Math.floor(w * dpr) || c.height !== Math.floor(h * dpr))) {
          c.width = Math.floor(w * dpr);
          c.height = Math.floor(h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = "#161411";
        ctx.fillRect(0, 0, w, h);
        if (img && img.complete && img.naturalWidth) {
          const ir = img.naturalWidth / img.naturalHeight;
          const cr = w / h;
          let dw = w;
          let dh = h;
          let dx = 0;
          let dy = 0;
          if (ir > cr) {
            dw = h * ir;
            dx = (w - dw) / 2;
          } else {
            dh = w / ir;
            dy = (h - dh) / 2;
          }
          ctx.drawImage(img, dx, dy, dw, dh);
          ctx.fillStyle = "rgba(22,20,17,0.18)";
          ctx.fillRect(0, 0, w, h);
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      st.kill();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={pin} className="relative z-0 h-[180vh] bg-ink">
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden sm:top-[4.25rem] sm:h-[calc(100svh-4.25rem)]">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        {Shards ? (
          <div className="pointer-events-none absolute inset-0">
            <Shards progress={progress} />
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/55" />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-ink/80 px-5 pt-16 pb-10 sm:px-8 sm:pb-12">
          <p className="font-sans text-[10px] tracking-[0.22em] text-gold uppercase sm:text-[11px]">
            {SITE.subline}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[0.9] text-bone italic sm:text-7xl md:text-8xl">
            {line}
          </h1>
          <p className="mt-3 font-display text-lg text-gold italic">scroll.</p>
        </div>
      </div>
    </section>
  );
}
