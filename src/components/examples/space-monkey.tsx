import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Brief = {
  id: string;
  vehicle: string;
  flight: string;
  date: string;
  weekday: string;
  status: "PLANNED" | "LOST";
  site: string;
  stack: string;
  engines: string;
  propellant: string;
  payload: string;
  card: string;
  video: string;
  videoLabel: string;
  facts: [string, string, string];
};

const BRIEFS: Brief[] = [
  {
    id: "f11",
    vehicle: "STARSHIP",
    flight: "FLIGHT 11",
    date: "01 NOV 2026",
    weekday: "Sunday",
    status: "PLANNED",
    site: "Starbase, TX",
    stack: "Super Heavy B18 + Ship 39",
    engines: "33 + 6 Raptor 3",
    propellant: "methalox (CH4 / LOX)",
    payload: "none (block 3 test article)",
    card: "/samples/space-monkey-cover.jpg",
    video: "https://youtu.be/k4P-fyKOGX0",
    videoLabel: "youtu.be/k4P-fyKOGX0",
    facts: [
      "First flight of Super Heavy B18 and Ship 39, both Block 3. Catch attempted on both ends if the stack survives the climb.",
      "Raptor 3 sea-level and vacuum cousins share a 280-bar chamber. Flight 11 is the first stack with all 39 engines as Raptor 3.",
      "1 Nov 2026 is a Sunday. SpaceX has flown IFT-class tests on weekdays more often than weekends — a Sunday attempt is a schedule tell.",
    ],
  },
  {
    id: "f7",
    vehicle: "STARSHIP",
    flight: "FLIGHT 7",
    date: "16 JAN 2026",
    weekday: "Friday",
    status: "LOST",
    site: "Starbase, TX",
    stack: "Super Heavy B14 / Ship 33",
    engines: "33 Raptor 2 + 3 vac Raptor",
    propellant: "methalox",
    payload: "Starlink simulator mass",
    card: "/samples/space-monkey-2.jpg",
    video: "https://youtu.be/pxn0wCd0e4Y?t=1285",
    videoLabel: "youtu.be/pxn0wCd0e4Y?t=1285",
    facts: [
      "Ship 33 broke up ~8.5 minutes after liftoff, during the coast / payload phase, after booster B14 had already completed a successful splashdown.",
      "A gaseous-oxygen leak in the attic — the volume above the payload bay — was the likely cause. Plumbing, not a Raptor failure.",
      "Payload was Starlink simulator mass. No operational satellites. Catch was not attempted; booster was still on a splashdown profile.",
    ],
  },
];

const SPEC_KEYS = [
  ["site", "site"],
  ["stack", "vehicle"],
  ["engines", "engines"],
  ["propellant", "propellant"],
  ["payload", "payload"],
] as const;

export function SpaceMonkeyExample() {
  const [id, setId] = useState<Brief["id"]>("f11");
  const brief = BRIEFS.find((b) => b.id === id) ?? BRIEFS[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
      <figure className="overflow-hidden rounded-lg bg-raised">
        <img
          src={brief.card}
          alt={`${brief.vehicle} ${brief.flight} orbital web card`}
          className="h-auto w-full object-cover object-top"
        />
        <figcaption className="px-4 py-3 font-mono text-[11px] tracking-wide text-faint">
          As shipped · dark orbital HTML card
        </figcaption>
      </figure>

      <article className="rounded-lg bg-void p-5 text-fg hairline sm:p-6">
        <div className="flex gap-2">
          {BRIEFS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setId(b.id)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-sm px-3 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors",
                b.id === brief.id
                  ? "bg-fg text-accent-fg"
                  : "text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.12)] hover:text-fg",
              )}
            >
              {b.flight}
            </button>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] tracking-[0.22em] text-ink uppercase">
          {brief.vehicle}
          <span className="mx-2 text-faint">·</span>
          {brief.flight}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.9] tracking-tight">
            {brief.date}
          </h3>
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.18em] uppercase",
              brief.status === "LOST" ? "text-ink" : "text-phosphor",
            )}
          >
            {brief.status}
          </span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-faint">{brief.weekday}</p>

        <dl className="mt-6 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
          {SPEC_KEYS.map(([key, label]) => (
            <div key={key}>
              <dt className="font-mono text-[10px] tracking-[0.18em] text-ink uppercase">
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-fg/90">{brief[key]}</dd>
            </div>
          ))}
          <div>
            <dt className="font-mono text-[10px] tracking-[0.18em] text-ink uppercase">
              video
            </dt>
            <dd className="mt-1">
              <a
                href={brief.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
              >
                {brief.videoLabel}
                <ArrowUpRight className="size-3.5" />
              </a>
            </dd>
          </div>
        </dl>

        <ol className="mt-6 space-y-3 border-t border-border pt-5">
          {brief.facts.map((fact, i) => (
            <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-relaxed text-muted">
              <span className="font-mono text-[11px] text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-pretty text-fg/80">{fact}</span>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
