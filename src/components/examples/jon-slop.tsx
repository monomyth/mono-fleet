import { ArrowUpRight } from "lucide-react";
import { SLOP_URL } from "@/lib/constellation";

const LINES = [
  {
    n: "520",
    when: "Oct 7 · 6:41 PM PT",
    title: "Peter Griffin — Juicy",
    who: "@AirBuddDwyer",
  },
  {
    n: "519",
    when: "Oct 7 · 5:34 PM PT",
    title: "NITM // slopcannon",
    who: "@kallistosiii",
  },
  {
    n: "518",
    when: "Oct 7 · 4:04 PM PT",
    title: "seasons change // slopcannon",
    who: "@kallistosiii",
  },
] as const;

export function JonSlopExample() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden rounded-lg bg-bg">
          <img
            src="/samples/jon-slop-cover.jpg"
            alt="A dark wall of blank video frames, one of them lit"
            className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
            A short line per video. The catalog is the desk next door.
          </figcaption>
        </figure>
        <a
          href={SLOP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-between gap-3 rounded-lg bg-surface px-4 hairline hover:bg-raised"
        >
          <span>
            <span className="block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Catalog
            </span>
            <span className="mt-1 block font-display text-2xl tracking-tight">jon-slop.grok.me</span>
          </span>
          <ArrowUpRight className="size-4 text-muted" />
        </a>
      </div>
      <div className="rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
            Watch line
          </p>
          <p className="font-mono text-[11px] text-paper-ink/45">520 known</p>
        </div>
        <ul className="mt-4 divide-y divide-paper-ink/10">
          {LINES.map((row) => (
            <li key={row.n} className="grid grid-cols-[2.2rem_1fr] gap-3 py-3">
              <span className="font-mono text-[11px] text-paper-ink/45">{row.n}</span>
              <span>
                <span className="block text-sm leading-snug">{row.title}</span>
                <span className="mt-1 block font-mono text-[11px] text-paper-ink/50">
                  {row.when} · {row.who}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-paper-ink/50">
          From the published catalog. New finds can go to Notion or a CSV.
        </p>
      </div>
    </div>
  );
}
