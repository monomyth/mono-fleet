import { useState } from "react";
import { cn } from "@/lib/utils";

const HOLES = [5, 6.5, 8] as const;

const ASK =
  "A 40 by 20 by 8 mm spacer. One through hole on center. A 1 mm chamfer on the edges.";

export function SteveExample() {
  const [hole, setHole] = useState<(typeof HOLES)[number]>(6.5);
  const r = (hole / 40) * 52;

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden rounded-lg bg-bg">
          <img
            src="/samples/steve-cover.jpg"
            alt="A small aluminum spacer with one center hole"
            className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
            Said in a sentence. Came back as parameters.
          </figcaption>
        </figure>
        <p className="font-display text-xl leading-snug tracking-tight">{ASK}</p>
        <p className="font-mono text-[11px] leading-relaxed text-faint">
          Reconstructed from the published job. Not a captured SteveCAD file.
        </p>
      </div>
      <div className="rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
            spacer · mm
          </p>
          <p className="font-mono text-[11px] text-paper-ink/45">hole drives the rest</p>
        </div>
        <svg
          viewBox="0 0 280 160"
          className="mt-3 w-full"
          role="img"
          aria-label="Dimensioned spacer, hole diameter changes"
        >
          <g fill="none" stroke="#1c1a16" strokeLinecap="round">
            <rect x="50" y="38" width="160" height="80" rx="3" strokeWidth="1.2" />
            <circle cx="130" cy="78" r={r} strokeWidth="1.4" />
            <line x1="50" y1="132" x2="210" y2="132" strokeOpacity="0.45" />
            <line x1="50" y1="126" x2="50" y2="138" strokeOpacity="0.45" />
            <line x1="210" y1="126" x2="210" y2="138" strokeOpacity="0.45" />
            <line x1="224" y1="38" x2="224" y2="118" strokeOpacity="0.45" />
            <line x1="218" y1="38" x2="230" y2="38" strokeOpacity="0.45" />
            <line x1="218" y1="118" x2="230" y2="118" strokeOpacity="0.45" />
          </g>
          <text x="130" y="148" textAnchor="middle" fill="#1c1a16" fontFamily="IBM Plex Mono, monospace" fontSize="11">
            40
          </text>
          <text x="246" y="82" fill="#1c1a16" fontFamily="IBM Plex Mono, monospace" fontSize="11">
            20
          </text>
          <text x="130" y="74" textAnchor="middle" fill="#1c1a16" fontFamily="IBM Plex Mono, monospace" fontSize="10">
            {`Ø${hole}`}
          </text>
        </svg>
        <div className="mt-2 flex gap-2">
          {HOLES.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setHole(n)}
              className={cn(
                "min-h-11 flex-1 rounded-sm font-mono text-[11px] tracking-wide uppercase",
                n === hole ? "bg-paper-ink text-paper" : "bg-paper-ink/10 text-paper-ink/70",
              )}
            >
              {`Ø ${n}`}
            </button>
          ))}
        </div>
        <pre className="mt-4 font-mono text-[11px] leading-relaxed text-paper-ink/70">{`length = 40
width = 20
thick = 8
hole = ${hole}
chamfer = 1`}</pre>
      </div>
    </div>
  );
}
