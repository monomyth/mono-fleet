import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FleetHeader } from "@/components/fleet-header";
import { BotCard } from "@/components/bot-card";
import { OperatorCard } from "@/components/operator-card";
import { ConstellationFooter } from "@/components/constellation-footer";
import { Badge } from "@/components/ui/badge";
import { listFleet } from "@/lib/fleet/api";
import { pingSisterDesk } from "@/lib/constellation-api";
import { PILOT_URL, SLOP_URL } from "@/lib/constellation";
import { X_PROFILE } from "@/lib/fleet/catalog";
import { formatDeskDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [fleet, sister] = await Promise.all([listFleet(), pingSisterDesk()]);
    return { ...fleet, sister };
  },
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  const featured = data.bots.filter((b) => b.featured);
  const rest = data.bots.filter((b) => !b.featured);
  const newest = data.bots[0];

  return (
    <div className="grid-paper min-h-dvh">
      <FleetHeader lastScan={data.lastScanAt ? formatDeskDate(data.lastScanAt) : null} />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16">
        <section className="stagger-in max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            Grok Bot desk
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.9] tracking-tight">
            The fleet.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Every public Grok Bot Eugene has shipped, in one place — with a
            working sample of what it actually does. There is no official
            roster API, so the desk watches{" "}
            <a
              href={X_PROFILE}
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
            >
              @monomyth
            </a>{" "}
            and the share pages themselves. The operator’s hire-me desk is next
            door at{" "}
            <a
              href={PILOT_URL}
              target="_blank"
              rel="noreferrer me"
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
            >
              monomyth.grok.me
            </a>
            . The Slop Cannon catalog is{" "}
            <a
              href={SLOP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
            >
              jon-slop.grok.me
            </a>
            .
          </p>
        </section>

        <section className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            ["Bots on desk", String(data.bots.length).padStart(2, "0")],
            ["First share", formatDeskDate(data.bots[data.bots.length - 1]?.announcedAt)],
            ["Latest", newest?.name ?? "—"],
            ["Sister desk", "Hire me"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-surface/80 px-4 py-3 hairline">
              <p className="font-mono text-[11px] tracking-wide text-muted uppercase">{k}</p>
              <p className="mt-1 font-display text-2xl leading-none">{v}</p>
            </div>
          ))}
        </section>

        <div className="mt-10">
          <OperatorCard live={data.sister.live} />
        </div>

        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="font-display text-3xl tracking-tight">On the desk</h2>
            <Badge>{data.bots.length} templates</Badge>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {featured.map((bot, i) => (
              <div key={bot.id} className={i === 0 ? "lg:col-span-2" : ""}>
                <BotCard bot={bot} featured={i === 0} />
              </div>
            ))}
            {rest.map((bot) => (
              <BotCard key={bot.id} bot={bot} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight">How it tracks</h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
              xAI does not publish a list-my-bots endpoint. Scan pulls three
              public surfaces: posts from @monomyth that contain{" "}
              <span className="font-mono text-fg/80">x.ai/bot/</span> share
              links, the community directory at grokbots.best, and each bot’s
              own share page for name and description. New templates land here
              automatically. Samples for brand-new bots wait until a real
              output exists.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-5 hairline">
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Last pass
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg">
              {data.lastScanNotes ??
                "Catalog is seeded from the last two weeks of X announcements. Hit Scan timeline to refresh."}
            </p>
            <a
              href={X_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-muted hover:text-fg"
            >
              Follow @monomyth
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </section>
      </main>
      <ConstellationFooter current="fleet" />
    </div>
  );
}
