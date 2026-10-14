import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSEMBLY_FRAME_COUNT, assemblyFrame } from "@/data/media";

const LINES = ["kneel.", "the sole.", "size 7."];

function cover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  const focusY = 0.52;
  ctx.drawImage(img, (w - dw) / 2, h * 0.5 - dh * focusY, dw, dh);
}

export function AssemblyHero() {
  const pin = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress = useRef(0);
  const shown = useRef(0);
  const frames = useRef<HTMLImageElement[]>([]);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= ASSEMBLY_FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = assemblyFrame(i);
      imgs.push(img);
    }
    frames.current = imgs;

    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pin.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.45,
      onUpdate: (self) => {
        progress.current = self.progress;
        const next = Math.min(LINES.length - 1, Math.floor(self.progress * LINES.length));
        setLine((prev) => (prev === next ? prev : next));
      },
    });

    let raf = 0;
    const draw = () => {
      const c = canvasRef.current;
      const ctx = c?.getContext("2d", { alpha: false });
      if (c && ctx) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = c.clientWidth;
        const h = c.clientHeight;
        if (w && h && (c.width !== Math.floor(w * dpr) || c.height !== Math.floor(h * dpr))) {
          c.width = Math.floor(w * dpr);
          c.height = Math.floor(h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        const target = progress.current * (ASSEMBLY_FRAME_COUNT - 1);
        shown.current += (target - shown.current) * 0.18;
        const base = Math.max(0, Math.min(ASSEMBLY_FRAME_COUNT - 2, Math.floor(shown.current)));
        const frac = shown.current - base;
        const a = frames.current[base];
        const b = frames.current[base + 1];
        ctx.fillStyle = "#141210";
        ctx.fillRect(0, 0, w, h);
        if (a?.complete && a.naturalWidth) {
          ctx.globalAlpha = 1;
          cover(ctx, a, w, h);
          if (b?.complete && b.naturalWidth && frac > 0.02) {
            ctx.globalAlpha = frac;
            cover(ctx, b, w, h);
          }
          ctx.globalAlpha = 1;
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
    <section ref={pin} className="relative h-[460vh] bg-[#141210]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute top-0 right-0 h-[58%] w-[34%] bg-gradient-to-bl from-black/45 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute top-[18%] right-[4%] w-[28%] text-right text-white sm:top-[22%] sm:right-[5%]">
          <p className="font-sans text-[10px] tracking-[0.22em] text-white/75 uppercase sm:text-[11px]">
            Queen of Darkness
          </p>
          <h1 className="mt-2 font-display text-5xl leading-[0.84] italic sm:text-7xl lg:text-8xl">
            {LINES[line]}
          </h1>
          <p className="mt-4 font-sans text-[10px] tracking-[0.22em] text-white/70 uppercase">scroll</p>
        </div>
      </div>
    </section>
  );
}
