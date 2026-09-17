import { ArrowUpRight } from "lucide-react";
import { DESKS, FLEET_URL, PILOT_URL, type DeskId } from "@/lib/constellation";
import { X_PROFILE } from "@/lib/fleet/catalog";
import { cn } from "@/lib/utils";

export function ConstellationFooter({ current }: { current: DeskId }) {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            Constellation
          </p>
          <p className="mt-3 max-w-md font-display text-2xl leading-tight tracking-tight">
            Two desks, one operator.
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            FLEET is the bot desk.{" "}
            <a
              href={PILOT_URL}
              target="_blank"
              rel="noreferrer me"
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
            >
              monomyth.grok.me
            </a>{" "}
            is the hire-me desk. Same person, linked.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {DESKS.map((desk) => {
            const here = desk.id === current;
            const inner = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-xl leading-none">{desk.name}</span>
                  {desk.external ? (
                    <ArrowUpRight className="size-3.5 text-muted" />
                  ) : (
                    <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
                      you are here
                    </span>
                  )}
                </div>
                <p className="mt-2 font-mono text-[11px] tracking-wide text-muted uppercase">
                  {desk.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desk.blurb}</p>
              </>
            );
            const className = cn(
              "rounded-lg bg-surface px-4 py-4 text-left hairline",
              here && "shadow-[0_0_0_1px_rgba(236,234,227,0.18)]",
            );
            if (desk.external) {
              return (
                <a
                  key={desk.id}
                  href={desk.href}
                  target="_blank"
                  rel="noreferrer me"
                  className={cn(className, "transition-colors hover:bg-raised")}
                >
                  {inner}
                </a>
              );
            }
            return (
              <div key={desk.id} className={className} aria-current="page">
                {inner}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-[11px] font-mono tracking-wide text-faint uppercase lg:col-span-2">
          <span>@monomyth</span>
          <a href={FLEET_URL} className="hover:text-muted">
            {FLEET_URL.replace("https://", "")}
          </a>
          <a
            href={PILOT_URL}
            target="_blank"
            rel="noreferrer me"
            className="hover:text-muted"
          >
            {PILOT_URL.replace("https://", "")}
          </a>
          <a href={X_PROFILE} target="_blank" rel="noreferrer" className="hover:text-muted">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
