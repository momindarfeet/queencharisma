import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LenisLike = {
  raf: (t: number) => void;
  destroy: () => void;
  scrollTo: (t: number, o?: { immediate?: boolean }) => void;
  start: () => void;
  stop: () => void;
  on: (e: string, cb: () => void) => void;
};

export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lenisRef = useRef<LenisLike | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let killed = false;
    let ticker: ((t: number) => void) | null = null;
    let onGate: (() => void) | null = null;
    let offGate: (() => void) | null = null;

    void import("lenis").then((mod) => {
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      const Lenis = mod.default;
      const lenis = new Lenis({
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
      }) as unknown as LenisLike;
      lenisRef.current = lenis;
      lenis.on("scroll", () => ScrollTrigger.update());
      ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      onGate = () => lenis.stop();
      offGate = () => lenis.start();
      window.addEventListener("qc-gate-open", onGate);
      window.addEventListener("qc-gate-close", offGate);
    });

    return () => {
      killed = true;
      if (ticker) gsap.ticker.remove(ticker);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (onGate) window.removeEventListener("qc-gate-open", onGate);
      if (offGate) window.removeEventListener("qc-gate-close", offGate);
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
