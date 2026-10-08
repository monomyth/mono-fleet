import { useState } from "react";
import { cn } from "@/lib/utils";

const LINES = [
  { t: "18:02", who: "Car", line: "Flight 11. What are we flying." },
  { t: "18:02", who: "Route", line: "Space Monkey" },
  { t: "18:03", who: "Back", line: "Planned. 1 Nov. Super Heavy B18 + Ship 39." },
  { t: "18:11", who: "Car", line: "Session died. The next open is blank." },
  { t: "18:11", who: "Pheid", line: "You asked about Flight 11. The brief is back. Minutes went to Notion." },
] as const;

export function PheidExample() {
  const [blank, setBlank] = useState(true);

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden rounded-lg bg-bg">
          <img
            src="/samples/pheid-cover.jpg"
            alt="A blank index card on a dark car console at night"
            className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
            The car forgets. The minutes do not.
          </figcaption>
        </figure>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setBlank(true)}
            className={cn(
              "min-h-11 flex-1 rounded-sm px-3 font-mono text-[11px] tracking-wide uppercase",
              blank ? "bg-fg text-accent-fg" : "bg-raised text-muted hover:text-fg",
            )}
          >
            Car, reopened
          </button>
          <button
            type="button"
            onClick={() => setBlank(false)}
            className={cn(
              "min-h-11 flex-1 rounded-sm px-3 font-mono text-[11px] tracking-wide uppercase",
              !blank ? "bg-fg text-accent-fg" : "bg-raised text-muted hover:text-fg",
            )}
          >
            Pheid’s book
          </button>
        </div>
        <p className="font-mono text-[11px] leading-relaxed text-faint">
          Reconstructed from the published job. Not a captured Notion page.
        </p>
      </div>
      <div className="rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
            {blank ? "Voice session" : "Minutes · Notion"}
          </p>
          <p className="font-mono text-[11px] text-paper-ink/45">29 Sep · night</p>
        </div>
        {blank ? (
          <div className="mt-8 flex min-h-52 flex-col items-start justify-center">
            <p className="font-display text-4xl leading-none tracking-tight">Blank.</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-ink/70">
              The car reopened with no history. Flight 11 is gone from this turn.
              Pheid still has it.
            </p>
          </div>
        ) : (
          <ol className="mt-4 divide-y divide-paper-ink/10">
            {LINES.map((row) => (
              <li key={`${row.t}-${row.who}`} className="grid grid-cols-[3.2rem_4.2rem_1fr] gap-3 py-3">
                <span className="font-mono text-[11px] text-paper-ink/45">{row.t}</span>
                <span className="font-mono text-[11px] tracking-wide uppercase text-paper-ink/55">
                  {row.who}
                </span>
                <span className="text-sm leading-snug">{row.line}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
