import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/shell";
import { PageHero } from "@/components/site/page-hero";
import { LongCopy } from "@/components/site/long-copy";
import { COURT } from "@/data/court";
import { Button } from "@/components/ui/button";

const KEY = "qc-court";

export const Route = createFileRoute("/court")({
  component: Page,
  head: () => ({ meta: [{ title: "The Court — Queen Charisma" }] }),
});

function Page() {
  const [mine, setMine] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setMine(JSON.parse(raw) as { name: string; text: string }[]);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <PageShell>
      <PageHero
        kicker="Confessions"
        title="The court"
        dek="They deactivate. They come back. They always come back."
        image="/media/photos/no-deactivating.jpg"
      />
      <LongCopy
        paras={[
          "These are the noises the house has heard. Some are from men who still send. Some are from men who think writing is the same as paying. It isn’t. But I keep the pretty ones.",
          "Add yours. It stays on this device like a little shrine in your browser. If you want me to actually read it, tribute exists.",
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 sm:px-6 md:grid-cols-2">
        {COURT.map((c) => (
          <blockquote key={c.name} className="border border-gold/20 p-8">
            <p className="font-display text-2xl italic leading-snug">{c.text}</p>
            <footer className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gold">
              {c.name} — {c.role}
            </footer>
          </blockquote>
        ))}
        {mine.map((c, i) => (
          <blockquote key={i} className="border border-gold/40 p-8">
            <p className="font-display text-2xl italic leading-snug">{c.text}</p>
            <footer className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gold">
              {c.name} — local confession
            </footer>
          </blockquote>
        ))}
      </section>
      <section className="mx-auto max-w-xl px-5 pb-24 sm:px-6">
        <h2 className="font-display text-3xl">Confess</h2>
        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!text.trim()) return;
            const next = [{ name: name || "unnamed piggy", text }, ...mine];
            setMine(next);
            try {
              localStorage.setItem(KEY, JSON.stringify(next));
            } catch {
              /* ignore */
            }
            setText("");
          }}
        >
          <input
            className="h-12 border border-gold/25 bg-ink-2 px-4 text-sm"
            placeholder="Name she can laugh at"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="h-32 border border-gold/25 bg-ink-2 px-4 py-3 text-sm"
            placeholder="What did her feet make you do…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">Pin it to this device</Button>
        </form>
      </section>
    </PageShell>
  );
}
