import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { DESKS, type DeskId } from "@/lib/constellation";
import { cn } from "@/lib/utils";

export function DeskSwitcher({ current }: { current: DeskId }) {
  return (
    <nav
      aria-label="Linked desks"
      className="flex h-9 items-center rounded-sm p-0.5 hairline"
    >
      {DESKS.map((desk) => {
        const active = desk.id === current;
        const className = cn(
          "inline-flex h-8 items-center gap-1 rounded-xs px-2.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors",
          active ? "bg-raised text-fg" : "text-muted hover:text-fg",
          !desk.external && "hidden sm:inline-flex",
        );
        if (desk.external) {
          return (
            <a
              key={desk.id}
              href={desk.href}
              target="_blank"
              rel="noreferrer me"
              className={className}
            >
              {desk.label}
              <ArrowUpRight className="size-3" />
            </a>
          );
        }
        return (
          <Link
            key={desk.id}
            to="/"
            aria-current={active ? "page" : undefined}
            className={className}
          >
            {desk.name}
          </Link>
        );
      })}
    </nav>
  );
}
