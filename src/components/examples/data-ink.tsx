import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Cell = { id: string; q: number; r: number; v: number; name: string };

// Hex cartogram of the US, values loosely matching the posted American Crow map.
const CELLS: Cell[] = [
  { id: "WA", q: 0, r: 1, v: 28, name: "Washington" },
  { id: "OR", q: 0, r: 2, v: 32, name: "Oregon" },
  { id: "CA", q: 0, r: 3, v: 36, name: "California" },
  { id: "NV", q: 1, r: 2, v: 22, name: "Nevada" },
  { id: "ID", q: 1, r: 1, v: 30, name: "Idaho" },
  { id: "MT", q: 2, r: 1, v: 41, name: "Montana" },
  { id: "WY", q: 2, r: 2, v: 34, name: "Wyoming" },
  { id: "UT", q: 2, r: 3, v: 26, name: "Utah" },
  { id: "AZ", q: 1, r: 3, v: 24, name: "Arizona" },
  { id: "CO", q: 3, r: 3, v: 38, name: "Colorado" },
  { id: "NM", q: 2, r: 4, v: 29, name: "New Mexico" },
  { id: "ND", q: 3, r: 1, v: 55, name: "North Dakota" },
  { id: "SD", q: 3, r: 2, v: 68, name: "South Dakota" },
  { id: "NE", q: 4, r: 2, v: 82, name: "Nebraska" },
  { id: "KS", q: 4, r: 3, v: 88, name: "Kansas" },
  { id: "OK", q: 4, r: 4, v: 76, name: "Oklahoma" },
  { id: "TX", q: 3, r: 4, v: 71, name: "Texas" },
  { id: "MN", q: 4, r: 1, v: 79, name: "Minnesota" },
  { id: "IA", q: 5, r: 2, v: 94, name: "Iowa" },
  { id: "MO", q: 5, r: 3, v: 90, name: "Missouri" },
  { id: "AR", q: 5, r: 4, v: 64, name: "Arkansas" },
  { id: "LA", q: 5, r: 5, v: 48, name: "Louisiana" },
  { id: "WI", q: 5, r: 1, v: 84, name: "Wisconsin" },
  { id: "IL", q: 6, r: 2, v: 96, name: "Illinois" },
  { id: "IN", q: 7, r: 2, v: 91, name: "Indiana" },
  { id: "MI", q: 6, r: 1, v: 62, name: "Michigan" },
  { id: "OH", q: 8, r: 2, v: 80, name: "Ohio" },
  { id: "KY", q: 6, r: 3, v: 72, name: "Kentucky" },
  { id: "TN", q: 6, r: 4, v: 58, name: "Tennessee" },
  { id: "MS", q: 6, r: 5, v: 44, name: "Mississippi" },
  { id: "AL", q: 7, r: 5, v: 42, name: "Alabama" },
  { id: "GA", q: 8, r: 5, v: 40, name: "Georgia" },
  { id: "FL", q: 8, r: 6, v: 38, name: "Florida" },
  { id: "SC", q: 9, r: 5, v: 36, name: "South Carolina" },
  { id: "NC", q: 8, r: 4, v: 46, name: "North Carolina" },
  { id: "VA", q: 8, r: 3, v: 52, name: "Virginia" },
  { id: "WV", q: 7, r: 3, v: 48, name: "West Virginia" },
  { id: "PA", q: 9, r: 2, v: 58, name: "Pennsylvania" },
  { id: "NY", q: 9, r: 1, v: 54, name: "New York" },
  { id: "VT", q: 10, r: 1, v: 26, name: "Vermont" },
  { id: "NH", q: 11, r: 1, v: 24, name: "New Hampshire" },
  { id: "ME", q: 12, r: 1, v: 22, name: "Maine" },
  { id: "MA", q: 11, r: 2, v: 30, name: "Massachusetts" },
  { id: "CT", q: 10, r: 2, v: 32, name: "Connecticut" },
  { id: "NJ", q: 10, r: 3, v: 34, name: "New Jersey" },
  { id: "DE", q: 9, r: 3, v: 28, name: "Delaware" },
  { id: "MD", q: 9, r: 4, v: 40, name: "Maryland" },
  { id: "AK", q: 0, r: 6, v: 8, name: "Alaska" },
  { id: "HI", q: 1, r: 6, v: 6, name: "Hawaii" },
];

function hexPoints(cx: number, cy: number, size: number) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + size * Math.cos(a)},${cy + size * Math.sin(a)}`);
  }
  return pts.join(" ");
}

function fillFor(v: number) {
  const t = Math.min(1, Math.max(0, v / 100));
  const r = Math.round(232 - t * 160);
  const g = Math.round(226 - t * 190);
  const b = Math.round(214 - t * 175);
  return `rgb(${r} ${g} ${b})`;
}

export function DataInkExample() {
  const [hover, setHover] = useState<Cell | null>(null);
  const size = 16;
  const w = Math.sqrt(3) * size;
  const h = 1.5 * size;
  const layout = useMemo(
    () =>
      CELLS.map((c) => ({
        ...c,
        x: 28 + c.q * w + (c.r % 2 ? w / 2 : 0),
        y: 26 + c.r * h,
      })),
    [w, h],
  );

  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <figure className="overflow-hidden rounded-lg bg-paper p-2">
        <img
          src="/samples/data-ink-crows.jpg"
          alt="American Crow density choropleth produced by Data Ink"
          className="h-auto w-full rounded-md outline outline-1 -outline-offset-1 outline-paper-ink/15"
        />
        <figcaption className="mt-3 px-2 pb-1 font-mono text-[11px] tracking-wide text-paper-ink/70">
          Field sample · R ggplot2 / sf · American Crow, 2014–2018
        </figcaption>
      </figure>
      <div className="flex flex-col rounded-lg bg-paper p-4 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">
            Hex cartogram
          </p>
          <p className="font-mono text-[11px] text-paper-ink/55">birds / km²</p>
        </div>
        <svg
          viewBox="0 0 280 160"
          className="mt-3 w-full"
          role="img"
          aria-label="Interactive hex cartogram of American Crow density"
        >
          {layout.map((c) => (
            <g key={c.id}>
              <polygon
                points={hexPoints(c.x, c.y, size - 0.8)}
                fill={fillFor(c.v)}
                stroke="#1c1a16"
                strokeOpacity={hover?.id === c.id ? 0.8 : 0.18}
                strokeWidth={hover?.id === c.id ? 1.4 : 0.4}
                className="cursor-pointer"
                onMouseEnter={() => setHover(c)}
                onMouseLeave={() => setHover(null)}
              />
              <text
                x={c.x}
                y={c.y + 1}
                textAnchor="middle"
                fontSize="6.5"
                fontFamily="IBM Plex Mono, monospace"
                fill={c.v > 55 ? "#f4efe4" : "#1c1a16"}
                className="pointer-events-none"
              >
                {c.id}
              </text>
            </g>
          ))}
        </svg>
        <div
          className={cn(
            "mt-auto flex items-end justify-between gap-3 pt-3 font-mono text-xs",
          )}
        >
          <div>
            <p className="text-[11px] tracking-wide text-paper-ink/55 uppercase">
              {hover ? hover.name : "Midwest peak"}
            </p>
            <p className="mt-0.5 text-lg leading-none">
              {hover ? hover.v.toFixed(0) : "96"}
              <span className="ml-1 text-[11px] text-paper-ink/55">idx</span>
            </p>
          </div>
          <p className="max-w-[16ch] text-right text-[11px] leading-snug text-paper-ink/60">
            Ink on paper. No 3D. No rainbow.
          </p>
        </div>
      </div>
    </div>
  );
}
