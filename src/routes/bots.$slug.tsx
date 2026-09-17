import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FleetHeader } from "@/components/fleet-header";
import { ConstellationFooter } from "@/components/constellation-footer";
import { BotExample } from "@/components/examples/bot-example";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { listFleet } from "@/lib/fleet/api";
import { PILOT_URL } from "@/lib/constellation";
import { formatDeskDate } from "@/lib/utils";

export const Route = createFileRoute("/bots/$slug")({
  loader: async ({ params }) => {
    const fleet = await listFleet();
    const bot = fleet.bots.find((b) => b.slug === params.slug);
    if (!bot) throw notFound();
    return { bot, lastScanAt: fleet.lastScanAt };
  },
  component: BotPage,
});

function BotPage() {
  const { bot, lastScanAt } = Route.useLoaderData();

  return (
    <div className="grid-paper min-h-dvh">
      <FleetHeader lastScan={lastScanAt ? formatDeskDate(lastScanAt) : null} />
      <main className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-wide text-muted uppercase hover:text-fg"
        >
          <ArrowLeft className="size-3.5" />
          Fleet
        </Link>

        <header className="mt-6 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{bot.category}</Badge>
              <span className="font-mono text-[11px] text-faint">
                {formatDeskDate(bot.announcedAt)}
              </span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] tracking-tight">
              {bot.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {bot.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild>
              <a href={bot.shareUrl} target="_blank" rel="noreferrer">
                Add to Grok Bot
                <ArrowUpRight />
              </a>
            </Button>
            {bot.sourceUrl ? (
              <Button variant="ghost" asChild>
                <a href={bot.sourceUrl} target="_blank" rel="noreferrer">
                  Announcement
                  <ArrowUpRight />
                </a>
              </Button>
            ) : (
              <Button variant="ghost" asChild>
                <a href={PILOT_URL} target="_blank" rel="noreferrer me">
                  Operator
                  <ArrowUpRight />
                </a>
              </Button>
            )}
          </div>
        </header>

        <section className="mt-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                Working sample
              </p>
              <h2 className="mt-1 font-display text-3xl tracking-tight">
                {bot.sampleCaption}
              </h2>
            </div>
            {bot.task ? (
              <p className="max-w-sm text-right font-mono text-[11px] leading-relaxed text-faint">
                Task · {bot.task}
              </p>
            ) : null}
          </div>
          <BotExample kind={bot.exampleKind} />
        </section>
      </main>
      <ConstellationFooter current="fleet" />
    </div>
  );
}
