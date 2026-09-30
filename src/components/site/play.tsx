import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const DICE: { n: number; label: string; amount: number }[] = [
  { n: 1, label: "coffee tax", amount: 15 },
  { n: 2, label: "nails", amount: 50 },
  { n: 3, label: "chat opener", amount: 50 },
  { n: 4, label: "heels tax", amount: 120 },
  { n: 5, label: "video opener", amount: 150 },
  { n: 6, label: "drain", amount: 300 },
];

export function DiceGame() {
  const [rolling, setRolling] = useState(false);
  const [face, setFace] = useState(1);
  const [landed, setLanded] = useState<(typeof DICE)[number] | null>(null);

  const roll = () => {
    if (rolling) return;
    setRolling(true);
    setLanded(null);
    let ticks = 0;
    const id = window.setInterval(() => {
      setFace(1 + Math.floor(Math.random() * 6));
      ticks += 1;
      if (ticks > 14) {
        window.clearInterval(id);
        const n = 1 + Math.floor(Math.random() * 6);
        const row = DICE[n - 1];
        setFace(n);
        setLanded(row);
        setRolling(false);
      }
    }, 70);
  };

  return (
    <div className="bg-ink text-bone">
      <p className="text-[11px] tracking-[0.22em] text-gold uppercase">Dice</p>
      <h2 className="mt-3 font-display text-5xl italic">Lucky isn’t a personality.</h2>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        Roll. Every number is tribute. The house is my feet. You still send.
      </p>
      <button
        type="button"
        onClick={roll}
        className="mt-10 flex size-40 items-center justify-center bg-paper font-display text-8xl text-ink italic"
        aria-label="Roll the dice"
      >
        {face}
      </button>
      {landed ? (
        <div className="mt-8">
          <p className="font-display text-3xl italic">
            {landed.label} · ${landed.amount}
          </p>
          <a
            href={whatsappUrl(
              `QUEEN CHARISMA — I rolled a ${landed.n}. I owe ${landed.label} $${landed.amount}. Tribute first.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-12 items-center bg-red px-6 text-xs tracking-[0.16em] text-paper uppercase"
          >
            Send it on WhatsApp
          </a>
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted">{rolling ? "Don’t blink." : "Tap the number."}</p>
      )}
    </div>
  );
}

export function RedGreen() {
  const [light, setLight] = useState<"red" | "green" | "idle">("idle");
  const [msg, setMsg] = useState("Tap start. Green = go. Red = freeze.");
  const [owed, setOwed] = useState(0);
  const [round, setRound] = useState(0);

  useEffect(() => {
    if (light === "idle") return;
    const t = window.setTimeout(() => {
      if (light === "green") {
        setMsg("Too slow. Green doesn’t wait. +$40.");
        setOwed((n) => n + 40);
        setLight("idle");
      } else {
        setMsg("Good. You froze. Don’t get cocky.");
        setLight("idle");
      }
    }, 1300);
    return () => window.clearTimeout(t);
  }, [light]);

  const start = () => {
    setRound((r) => r + 1);
    setLight(Math.random() > 0.45 ? "green" : "red");
    setMsg("");
  };

  const tap = () => {
    if (light === "idle") return;
    if (light === "green") {
      setMsg("Lived. For now.");
    } else {
      setMsg("Red. You moved. +$80.");
      setOwed((n) => n + 80);
    }
    setLight("idle");
  };

  const bg = light === "red" ? "bg-red text-paper" : light === "green" ? "bg-paper text-ink" : "bg-ink-2 text-bone";

  return (
    <div>
      <p className="text-[11px] tracking-[0.22em] text-gold uppercase">Red / green</p>
      <h2 className="mt-3 font-display text-5xl italic">Play stupid games.</h2>
      <button type="button" onClick={light === "idle" ? start : tap} className={`mt-8 flex min-h-[280px] w-full items-center justify-center ${bg}`}>
        <span className="font-display text-[14vw] leading-none italic sm:text-8xl">
          {light === "idle" ? (round === 0 ? "start" : "again") : light}
        </span>
      </button>
      <p className="mt-5 text-sm text-muted">{msg}</p>
      <p className="mt-2 font-display text-2xl italic">Owed this sitting: ${owed}</p>
      {owed > 0 ? (
        <a
          href={whatsappUrl(
            `QUEEN CHARISMA — I played red/green. I owe $${owed} from being a clumsy piggy.`,
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex h-12 items-center bg-red px-6 text-xs tracking-[0.16em] text-paper uppercase"
        >
          Pay the round
        </a>
      ) : (
        <div className="mt-5">
          <Button type="button" variant="ghost" onClick={start}>
            Start a round
          </Button>
        </div>
      )}
    </div>
  );
}
