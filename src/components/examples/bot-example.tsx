import type { ExampleKind } from "@/lib/fleet/catalog";
import { DataInkExample } from "./data-ink";
import { YusicianExample } from "./yusician";
import { SolidVibeExample } from "./solid-vibe";
import { NeuroscienceExample } from "./neuroscience";

export function BotExample({ kind }: { kind: ExampleKind | null }) {
  if (kind === "data-ink") return <DataInkExample />;
  if (kind === "yusician") return <YusicianExample />;
  if (kind === "solid-vibe") return <SolidVibeExample />;
  if (kind === "neuroscience") return <NeuroscienceExample />;
  return (
    <div className="rounded-lg bg-surface p-6 text-sm text-muted">
      No live sample captured yet. Open the share link and run a task — then
      send the output and it will land here.
    </div>
  );
}
