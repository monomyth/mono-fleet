import { useState } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  "Caption gate",
  "Translate",
  "Burn subs",
  "Save the text",
  "Draft the quote",
] as const;

const QUOTE =
  "Israeli passenger recounts to Netanyahu how Capt. Machchar unlocked the cockpit before collapsing from stab wounds — then passengers overpowered the hijacker as he tried to crash the plane.";

export function RosettaExample() {
  const [step, setStep] = useState(STEPS.length - 1);
  const done = step === STEPS.length - 1;

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden rounded-lg bg-bg">
          <img
            src="/samples/rosetta-cover.jpg"
            alt="A dark monitor with an empty subtitle bar and a blank translation line"
            className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
          <figcaption className="px-1 pt-2 font-mono text-[11px] tracking-wide text-muted">
            Source stays up. The quote is the translation.
          </figcaption>
        </figure>
        <div className="flex flex-wrap gap-2">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              className={cn(
                "min-h-11 rounded-sm px-3 font-mono text-[11px] tracking-wide uppercase",
                i === step ? "bg-fg text-accent-fg" : "bg-raised text-muted hover:text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="font-mono text-[11px] leading-relaxed text-faint">
          The published run,{" "}
          <a
            href="https://x.com/monomyth/status/2105349934186889699"
            className="underline decoration-faint underline-offset-2 hover:text-fg"
          >
            the quote post
          </a>
          . Original left standing.
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-paper p-5 text-paper-ink">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper-ink/55">
            {done ? "Quote draft · English" : STEPS[step]}
          </p>
          <p className="font-mono text-[11px] text-paper-ink/45">
            {step + 1} / {STEPS.length}
          </p>
        </div>
        {done ? (
          <blockquote className="mt-6 border-l border-paper-ink/20 pl-4 font-display text-2xl leading-snug tracking-tight">
            {QUOTE}
          </blockquote>
        ) : (
          <p className="mt-8 max-w-sm font-display text-3xl leading-tight tracking-tight">
            {STEPS[step]}.
          </p>
        )}
        <p className="mt-auto pt-6 font-mono text-[11px] leading-relaxed text-paper-ink/50">
          Approval sits with you. Rosetta drafts the quote. It does not post it.
        </p>
      </div>
    </div>
  );
}
