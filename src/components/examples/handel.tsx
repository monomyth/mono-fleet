import { useState } from "react";
import { Check, Copy } from "lucide-react";

const SOURCE =
  "Industrial electronic. Dry kick. Analog stab. No vocal. Warehouse at 2 a.m.";

const DNA = [
  { k: "Groove", v: "4/4. Dry kick on the one. Hat pushed late. No swing." },
  { k: "Hook", v: "Two-bar analog stab, minor, no lift, no chorus." },
  { k: "Lane", v: "Warehouse industrial. Empty room, 2 a.m." },
  { k: "Vocal", v: "None. Keep the lane empty." },
] as const;

const COUSIN = `Harder-hitting cousin of a dry-kick warehouse loop. Same minor analog stab, same empty vocal lane, more slap. Double the kick transient, shorten the hat, put a distorted bass octave under the stab. No lyrics. Instrumental. About 128. Industrial electronic, not festival EDM.`;

export function HandelExample() {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(COUSIN);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <figure className="overflow-hidden rounded-lg bg-paper p-2">
        <img
          src="/samples/handel-cover.jpg"
          alt="Printed spectrogram on paper, the shape of a captured loop"
          className="aspect-[16/10] w-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-paper-ink/15"
        />
        <figcaption className="mt-3 px-2 pb-1 font-mono text-[11px] tracking-wide text-paper-ink/70">
          DNA print · reconstructed from the published method
        </figcaption>
      </figure>
      <div className="flex flex-col gap-3">
        <div className="rounded-lg bg-surface p-4 hairline">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Captured line
          </p>
          <p className="mt-2 font-display text-2xl leading-snug tracking-tight italic">
            {SOURCE}
          </p>
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-faint">
            Same warehouse prompt already on this desk. Handel’s job is to turn
            a line like this — or a live capture — into a cousin, not a cover.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border">
          {DNA.map((row) => (
            <div key={row.k} className="bg-raised px-3 py-3">
              <dt className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                {row.k}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-fg">{row.v}</dd>
            </div>
          ))}
        </dl>
        <div className="rounded-lg bg-void p-4 text-fg">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Suno cousin
            </p>
            <button
              type="button"
              onClick={() => void copyPrompt()}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-sm px-2 font-mono text-[11px] tracking-wide text-fg hover:bg-raised"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-fg/90">{COUSIN}</p>
        </div>
      </div>
    </div>
  );
}
