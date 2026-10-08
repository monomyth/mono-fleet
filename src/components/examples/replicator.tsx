import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type Kit = {
  id: string;
  name: string;
  share: string;
  role: string;
  instructions: string;
};

const KITS: Kit[] = [
  {
    id: "space-monkey",
    name: "Space Monkey",
    share: "https://x.ai/bot/438hek2SIHhpHn9FDlQCe",
    role: "Launch briefs. Any nation, any year, planned or flown.",
    instructions:
      "You answer any orbital or suborbital launch with a checklist brief: vehicle, engines, propellant, payload, photo, video, and three facts that are specific to that flight. Do not pad with generic rocket trivia. If a fact is not tied to this vehicle, this date, or this outcome, drop it.",
  },
  {
    id: "data-ink",
    name: "Data Ink",
    share: "https://x.ai/bot/Y2-3YXQhppPkm5IwYWqTE",
    role: "Chart-first analysis. CSV, paste, path, or a public table.",
    instructions:
      "You make Tufte-clean plots and maps in R. Handed a CSV, a paste, a path, or a public table, you return the figure — not a paragraph about the figure. Prefer ink that carries data. Label units. Do not decorate.",
  },
];

function kitText(kit: Kit) {
  return [
    `NAME: ${kit.name}`,
    `SOURCE: ${kit.share}`,
    `ROLE: ${kit.role}`,
    "",
    "INSTRUCTIONS:",
    kit.instructions,
    "",
    "APPLY: ChatGPT desktop, signed in. Paste this kit as the Dot. Do not invent tools the source bot does not have.",
  ].join("\n");
}

export function ReplicatorExample() {
  const [id, setId] = useState(KITS[0].id);
  const [copied, setCopied] = useState(false);
  const kit = KITS.find((k) => k.id === id) ?? KITS[0];
  const text = kitText(kit);

  async function copyKit() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden rounded-lg bg-bg">
          <img
            src="/samples/replicator-tea.jpg"
            alt="A replicator slot materializing a teacup, a black two-eyed bot orb, and a yellow dot in glasses and a bow tie"
            className="aspect-[16/10] w-full object-cover object-center outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
            Ordered tea. The slot served a Bot and a Dot.
          </figcaption>
        </figure>
        <div className="flex gap-2">
          {KITS.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => {
                setId(k.id);
                setCopied(false);
              }}
              className={cn(
                "min-h-11 flex-1 rounded-sm px-3 font-mono text-[11px] tracking-wide uppercase",
                k.id === kit.id
                  ? "bg-fg text-accent-fg"
                  : "bg-raised text-muted hover:text-fg",
              )}
            >
              {k.name}
            </button>
          ))}
        </div>
        <p className="font-mono text-[11px] leading-relaxed text-faint">
          Reconstructed from the public share page. Not a captured ChatGPT session.
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
              Paste kit · ChatGPT Dot
            </p>
            <h3 className="mt-1 font-display text-3xl tracking-tight">{kit.name}</h3>
          </div>
          <button
            type="button"
            onClick={() => void copyKit()}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-sm bg-paper-ink px-3 font-mono text-[11px] tracking-wide text-paper uppercase"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy kit"}
          </button>
        </div>
        <pre className="mt-4 flex-1 overflow-x-auto font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-paper-ink/85">
          {text}
        </pre>
      </div>
    </div>
  );
}
