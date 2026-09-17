import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { FleetBot } from "@/lib/fleet/catalog";
import { formatDeskDate } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function BotCard({ bot, featured = false }: { bot: FleetBot; featured?: boolean }) {
  return (
    <Link
      to="/bots/$slug"
      params={{ slug: bot.slug }}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface p-2 hairline hairline-hover transition-[box-shadow,transform] duration-200 ease-out"
    >
      <div
        className={
          featured
            ? "relative aspect-[16/9] overflow-hidden rounded-lg bg-raised sm:aspect-[16/8]"
            : "relative aspect-[16/10] overflow-hidden rounded-lg bg-raised"
        }
      >
        <img
          src={bot.cover}
          alt=""
          className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-bg/80 to-transparent p-3">
          <Badge>{bot.category}</Badge>
          <span className="font-mono text-[11px] text-fg/80">{formatDeskDate(bot.announcedAt)}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-3xl leading-none tracking-tight">{bot.name}</h2>
          <ArrowUpRight className="mt-1 size-4 text-muted transition-colors group-hover:text-fg" />
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{bot.description}</p>
        <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">
          {bot.sampleCaption}
        </p>
      </div>
    </Link>
  );
}
