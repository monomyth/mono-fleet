import { useState } from "react";
import { cn } from "@/lib/utils";

const DIMS = [
  { id: "od", label: "Ø 86.0", hint: "outer diameter" },
  { id: "id", label: "Ø 22.0", hint: "bore" },
  { id: "pcd", label: "PCD 62.0", hint: "bolt circle" },
  { id: "thk", label: "8.0 THK", hint: "stock thickness" },
] as const;

export function SolidVibeExample() {
  const [hot, setHot] = useState<(typeof DIMS)[number]["id"] | null>(null);

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <figure className="overflow-hidden rounded-lg bg-paper p-2">
        <img
          src="/samples/solid-vibe-drawing.jpg"
          alt="Orthographic technical drawing of a titanium mounting flange"
          className="h-auto w-full rounded-md outline outline-1 -outline-offset-1 outline-paper-ink/15"
        />
        <figcaption className="mt-3 px-2 pb-1 font-mono text-[11px] tracking-wide text-paper-ink/70">
          Vellum plot · first-angle projection · millimetres
        </figcaption>
      </figure>
      <div className="rounded-lg bg-paper p-4 text-paper-ink">
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">
            WF-17 flange
          </p>
          <p className="font-mono text-[11px] text-paper-ink/55">Ti-6Al-4V</p>
        </div>
        <svg
          viewBox="0 0 320 260"
          className="mt-2 w-full"
          role="img"
          aria-label="Dimensioned drawing of a six-bolt titanium flange"
        >
          <g fill="none" stroke="#1c1a16" strokeLinecap="round">
            <circle
              cx="150"
              cy="130"
              r="78"
              strokeWidth={hot === "od" ? 2.2 : 1.1}
              className="transition-[stroke-width] duration-150"
            />
            <circle
              cx="150"
              cy="130"
              r="56"
              strokeDasharray="3 3"
              strokeOpacity={0.55}
              strokeWidth={hot === "pcd" ? 1.8 : 0.8}
            />
            <circle
              cx="150"
              cy="130"
              r="20"
              strokeWidth={hot === "id" ? 2.2 : 1.1}
            />
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (Math.PI / 3) * i - Math.PI / 2;
              const x = 150 + Math.cos(a) * 56;
              const y = 130 + Math.sin(a) * 56;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5.5"
                  strokeWidth={1}
                  className="fill-paper"
                />
              );
            })}
            <line x1="150" y1="48" x2="150" y2="212" strokeOpacity={0.25} />
            <line x1="68" y1="130" x2="232" y2="130" strokeOpacity={0.25} />
            {/* OD dim */}
            <g strokeOpacity={hot === "od" ? 1 : 0.55}>
              <line x1="150" y1="52" x2="248" y2="52" />
              <line x1="248" y1="52" x2="248" y2="208" />
              <line x1="228" y1="52" x2="248" y2="52" />
              <line x1="228" y1="208" x2="248" y2="208" />
            </g>
            <text
              x="258"
              y="136"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              fill="#1c1a16"
            >
              Ø86
            </text>
            <text
              x="150"
              y="126"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fill="#1c1a16"
            >
              Ø22
            </text>
            <text
              x="196"
              y="96"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fill="#1c1a16"
            >
              6×Ø6.5
            </text>
          </g>
        </svg>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          {DIMS.map((d) => (
            <li key={d.id}>
              <button
                type="button"
                onMouseEnter={() => setHot(d.id)}
                onMouseLeave={() => setHot(null)}
                onFocus={() => setHot(d.id)}
                onBlur={() => setHot(null)}
                className={cn(
                  "flex h-11 w-full items-center justify-between rounded-sm px-3 text-left font-mono text-xs",
                  "shadow-[0_0_0_1px_rgba(28,26,22,0.12)] transition-colors duration-150",
                  hot === d.id ? "bg-paper-ink text-paper" : "bg-transparent",
                )}
              >
                <span>{d.label}</span>
                <span className={hot === d.id ? "text-paper/70" : "text-paper-ink/50"}>
                  {d.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[11px] text-paper-ink/55">
          Exports STEP / STL / 3MF · Python fallback if the GUI stalls
        </p>
      </div>
    </div>
  );
}
