import { useEffect, useState } from "react";
import { AGE_KEY, SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sync = () => {
      try {
        setShow(localStorage.getItem(AGE_KEY) === "1");
      } catch {
        setShow(false);
      }
    };
    sync();
    window.addEventListener("qc-gate-close", sync);
    return () => window.removeEventListener("qc-gate-close", sync);
  }, []);

  if (!show) return null;

  return (
    <a
      href={whatsappUrl("I came from the house. I can follow protocol.")}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center bg-red px-5 font-sans text-[11px] tracking-[0.16em] text-paper uppercase sm:right-6 sm:bottom-6"
    >
      WhatsApp
      <span className="sr-only"> {SITE.name}</span>
    </a>
  );
}
