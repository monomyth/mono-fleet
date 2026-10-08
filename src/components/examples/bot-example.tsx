import type { ExampleKind } from "@/lib/fleet/catalog";
import { DataInkExample } from "./data-ink";
import { YusicianExample } from "./yusician";
import { SolidVibeExample } from "./solid-vibe";
import { NeuroscienceExample } from "./neuroscience";
import { SpaceMonkeyExample } from "./space-monkey";
import { HandelExample } from "./handel";
import { JonSlopExample } from "./jon-slop";
import { SteveExample } from "./steve";
import { LumaScoutExample } from "./luma-scout";
import { RosettaExample } from "./rosetta";
import { PheidExample } from "./pheid";
import { ReplicatorExample } from "./replicator";

export function BotExample({ kind }: { kind: ExampleKind | null }) {
  if (kind === "jon-slop") return <JonSlopExample />;
  if (kind === "steve") return <SteveExample />;
  if (kind === "luma-scout") return <LumaScoutExample />;
  if (kind === "rosetta") return <RosettaExample />;
  if (kind === "pheid") return <PheidExample />;
  if (kind === "replicator") return <ReplicatorExample />;
  if (kind === "handel") return <HandelExample />;
  if (kind === "space-monkey") return <SpaceMonkeyExample />;
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