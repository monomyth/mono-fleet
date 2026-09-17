import { Link } from "@tanstack/react-router";
import { ScanButton } from "./scan-button";
import { DeskSwitcher } from "./desk-switcher";

export function FleetHeader({ lastScan }: { lastScan?: string | null }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <span className="font-display text-2xl leading-none tracking-tight">FLEET</span>
            <span className="hidden font-mono text-[11px] tracking-[0.18em] text-muted uppercase sm:inline">
              Desk / @monomyth
            </span>
          </Link>
          <DeskSwitcher current="fleet" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {lastScan ? (
            <p className="hidden font-mono text-[11px] text-faint lg:block">
              last scan {lastScan}
            </p>
          ) : null}
          <ScanButton />
        </div>
      </div>
    </header>
  );
}
