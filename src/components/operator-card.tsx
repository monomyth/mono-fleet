import { ArrowUpRight, MapPin } from "lucide-react";
import { PILOT, PILOT_URL, LINKEDIN_URL } from "@/lib/constellation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function OperatorCard({ live }: { live: boolean }) {
  return (
    <section
      aria-labelledby="pilot-desk-heading"
      className="overflow-hidden rounded-xl bg-paper text-paper-ink hairline"
    >
      <div className="grid lg:grid-cols-[minmax(0,220px)_1fr]">
        <div className="relative aspect-[4/5] bg-raised lg:aspect-auto lg:min-h-[280px]">
          <img
            src={PILOT.photo}
            alt={PILOT.name}
            className="h-full w-full object-cover object-[center_20%]"
            onError={(e) => {
              e.currentTarget.src = PILOT.photoFallback;
            }}
          />
        </div>
        <div className="flex flex-col px-5 py-6 sm:px-7 sm:py-7">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-[11px] tracking-[0.22em] text-paper-ink/55 uppercase">
              Pilot desk
            </p>
            <span className="font-mono text-[11px] text-paper-ink/40">·</span>
            <a
              href={PILOT_URL}
              target="_blank"
              rel="noreferrer me"
              className="font-mono text-[11px] tracking-wide text-paper-ink/70 underline decoration-paper-ink/25 underline-offset-4 hover:text-paper-ink hover:decoration-paper-ink"
            >
              monomyth.grok.me
            </a>
            {live ? (
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-paper-ink/70 uppercase">
                <span className="size-1.5 rounded-full bg-ink" aria-hidden />
                Live
              </span>
            ) : null}
          </div>

          <h2
            id="pilot-desk-heading"
            className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[0.92] tracking-tight"
          >
            {PILOT.name}
          </h2>
          <p className="mt-2 text-sm text-paper-ink/70 sm:text-base">
            {PILOT.title}
            <span className="mx-2 text-paper-ink/35">·</span>
            {PILOT.tenure}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className="text-paper-ink/80 shadow-[0_0_0_1px_rgba(28,26,22,0.16)]">
              {PILOT.availability}
            </Badge>
            <Badge className="text-paper-ink/80 shadow-[0_0_0_1px_rgba(28,26,22,0.16)]">
              {PILOT.focus}
            </Badge>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper-ink/80">
            {PILOT.blurb}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-paper-ink/55">
            <MapPin className="size-3.5 shrink-0" />
            {PILOT.location}
          </p>

          <blockquote className="mt-5 max-w-xl border-l border-paper-ink/20 pl-4 font-display text-lg leading-snug text-paper-ink/80 italic">
            {PILOT.quote}
          </blockquote>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild className="bg-paper-ink text-paper hover:bg-fg hover:text-accent-fg">
              <a href={PILOT_URL} target="_blank" rel="noreferrer me">
                Open resume
                <ArrowUpRight />
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-paper-ink shadow-[0_0_0_1px_rgba(28,26,22,0.18)] hover:bg-paper-ink/10 hover:text-paper-ink"
            >
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
