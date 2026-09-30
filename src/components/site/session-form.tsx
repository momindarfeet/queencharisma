import { useEffect, useMemo, useState } from "react";
import { DRAFT_KEY } from "@/lib/site";
import { SERVICES, type ServiceId } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LENGTHS = ["10 min", "15 min", "20 min", "30 min", "45 min", "60 min"];
const FILTH = ["Soft worship", "Mean", "Filthy", "Ruin me"];

export function SessionForm({
  defaultService = "video",
  theme = "night",
}: {
  defaultService?: ServiceId;
  theme?: "night" | "day";
}) {
  const [service, setService] = useState<ServiceId>(defaultService);
  const [length, setLength] = useState("15 min");
  const [budget, setBudget] = useState("150");
  const [filth, setFilth] = useState("Filthy");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const d = JSON.parse(raw) as Record<string, string>;
      if (d.service) setService(d.service as ServiceId);
      if (d.length) setLength(d.length);
      if (d.budget) setBudget(d.budget);
      if (d.filth) setFilth(d.filth);
      if (d.name) setName(d.name);
      if (d.notes) setNotes(d.notes);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ service, length, budget, filth, name, notes }),
      );
    } catch {
      /* ignore */
    }
  }, [service, length, budget, filth, name, notes]);

  const message = useMemo(() => {
    const svc = SERVICES.find((s) => s.id === service)?.name ?? service;
    return [
      "QUEEN CHARISMA — SESSION REQUEST",
      `Service: ${svc}`,
      `Length: ${length}`,
      `Budget: $${budget}`,
      `Filth: ${filth}`,
      `Call me: ${name || "(unworthy, no name)"}`,
      notes ? `Notes: ${notes}` : "Notes: (kneeling in silence)",
      "",
      "I have read protocol. Tribute first. No nudity asks.",
    ].join("\n");
  }, [service, length, budget, filth, name, notes]);

  const night = theme === "night";
  const field = night
    ? "h-12 w-full border-0 border-b border-white/15 bg-transparent px-0 text-sm text-bone outline-none focus:border-red"
    : "h-12 w-full border-0 border-b border-ink/20 bg-transparent px-0 text-sm text-ink outline-none focus:border-red";
  const label = night
    ? "text-[11px] tracking-[0.18em] text-gold uppercase"
    : "text-[11px] tracking-[0.18em] text-red uppercase";

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
      }}
    >
      <label className="grid gap-2">
        <span className={label}>Service</span>
        <select className={field} value={service} onChange={(e) => setService(e.target.value as ServiceId)}>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={label}>Length</span>
          <select className={field} value={length} onChange={(e) => setLength(e.target.value)}>
            {LENGTHS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className={label}>Budget USD</span>
          <input
            className={field}
            inputMode="numeric"
            value={budget}
            onChange={(e) => setBudget(e.target.value.replace(/[^\d]/g, ""))}
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className={label}>How filthy</span>
        <select className={field} value={filth} onChange={(e) => setFilth(e.target.value)}>
          {FILTH.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className={label}>Name she can ruin</span>
        <input
          className={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="piggy, loser, your government name…"
        />
      </label>
      <label className="grid gap-2">
        <span className={label}>Notes</span>
        <textarea
          className={`${field} h-28 py-3`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Soles on the lens. Dangle. Deny me. Drain if I beg…"
        />
      </label>
      <pre
        className={
          night
            ? "overflow-x-auto bg-ink-2/60 p-4 font-sans text-xs leading-relaxed text-muted"
            : "overflow-x-auto bg-paper-2 p-4 font-sans text-xs leading-relaxed text-ink/60"
        }
      >
        {message}
      </pre>
      <Button type="submit" variant={night ? "gold" : "red"} size="lg">
        Open WhatsApp
      </Button>
      <p className={night ? "text-xs text-muted" : "text-xs text-ink/50"}>
        Nothing is charged here. The request lands in her WhatsApp. Tribute still first.
      </p>
    </form>
  );
}
