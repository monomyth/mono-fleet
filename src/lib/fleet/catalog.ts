export type ExampleKind =
  | "jon-slop"
  | "steve"
  | "luma-scout"
  | "rosetta"
  | "pheid"
  | "replicator"
  | "handel"
  | "space-monkey"
  | "data-ink"
  | "yusician"
  | "solid-vibe"
  | "neuroscience";

export type FleetBot = {
  id: string;
  slug: string;
  name: string;
  description: string;
  author: string;
  shareUrl: string;
  sourceUrl: string | null;
  siteUrl?: string | null;
  ogImage: string | null;
  announcedAt: string;
  category: string;
  cover: string;
  exampleKind: ExampleKind | null;
  featured: boolean;
  sampleCaption: string;
  task: string;
};

export const HANDLE = "monomyth";
export const AUTHOR = "Eugene";
export const X_PROFILE = `https://x.com/${HANDLE}`;
export const SCAN_SINCE = "2026-08-11";

export const SEED_BOTS: FleetBot[] = [
  {
    id: "Ky0xwV840V9RZoTPQlne_",
    slug: "jon-slop",
    name: "Jon Slop",
    description:
      "Keeps watch on X for new music videos made with Slop Cannon (slop.cc) and sends a short line for each one. It ships with 520 known videos from Aug 24 to Oct 7, 2026. New finds can go to Notion or a CSV. The catalog is jon-slop.grok.me.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/Ky0xwV840V9RZoTPQlne_",
    sourceUrl: null,
    siteUrl: "https://jon-slop.grok.me",
    ogImage: null,
    announcedAt: "2026-10-08T04:38:00.000Z",
    category: "Watch",
    cover: "/samples/jon-slop-cover.jpg",
    exampleKind: "jon-slop",
    featured: true,
    sampleCaption: "A short line per new Slop Cannon video. The catalog is next door.",
    task: "watch X for new Slop Cannon videos and send a short line, with the known set on jon-slop.grok.me",
  },
  {
    id: "vgxpKgKEkvkf_POLj2Zdv",
    slug: "steve",
    name: "Steve",
    description:
      "Turns plain language into precise, dimensioned CAD through SteveCAD. For anyone who wants a buildable parametric part without pasting a prompt into a website.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/vgxpKgKEkvkf_POLj2Zdv",
    sourceUrl: "https://x.com/monomyth/status/2106407064214139312",
    ogImage: null,
    announcedAt: "2026-10-03T15:32:33.000Z",
    category: "CAD",
    cover: "/samples/steve-cover.jpg",
    exampleKind: "steve",
    featured: true,
    sampleCaption: "A sentence in. A dimensioned spacer out.",
    task: "turn a plain-language part into SteveCAD parameters and a dimensioned solid",
  },
  {
    id: "i8-CgHSny3TXdV3O0dnbv",
    slug: "luma-scout",
    name: "Luma Scout",
    description:
      "Watches a Luma calendar every day. Alerts when something is nearby. RSVPs only when the event is free and open, then adds it to Google Calendar.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/i8-CgHSny3TXdV3O0dnbv",
    sourceUrl: null,
    ogImage: null,
    announcedAt: "2026-09-30T17:43:00.000Z",
    category: "Calendar",
    cover: "/samples/luma-scout-cover.jpg",
    exampleKind: "luma-scout",
    featured: true,
    sampleCaption: "Nearby and free gets an RSVP. Paid or far gets left.",
    task: "watch a Luma calendar, alert on nearby events, RSVP the free open ones onto Google Calendar",
  },
  {
    id: "hP_XdYFX8RBWp1teD2twd",
    slug: "rosetta",
    name: "Rosetta",
    description:
      "Turns an X video into a captioned quote-post in your language. Caption gate, translate, burn the subs, save the text, then draft a quote for your approval. The original post stays the source.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/hP_XdYFX8RBWp1teD2twd",
    sourceUrl: "https://x.com/monomyth/status/2105350707574657466",
    ogImage: null,
    announcedAt: "2026-09-30T17:34:58.000Z",
    category: "Captions",
    cover: "/samples/rosetta-cover.jpg",
    exampleKind: "rosetta",
    featured: true,
    sampleCaption: "Hebrew video in. English quote out. Original left standing.",
    task: "caption an X video, burn subs, and draft a quote-post without replacing the source",
  },
  {
    id: "Py5IDzYhNWMoMmzfHFbuB",
    slug: "pheid",
    name: "Pheid",
    description:
      "Switchboard between a voice assistant and specialist bots. Built for Grok in the car, which reopens with no history. Routes asks, relays a short status, and writes the session minutes to Notion.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/Py5IDzYhNWMoMmzfHFbuB",
    sourceUrl: "https://x.com/monomyth/status/2105155092899062078",
    ogImage: null,
    announcedAt: "2026-09-30T04:37:40.000Z",
    category: "Switchboard",
    cover: "/samples/pheid-cover.jpg",
    exampleKind: "pheid",
    featured: true,
    sampleCaption: "Car reopened blank. Pheid still had Flight 11.",
    task: "keep multi-turn minutes when the car session dies, and route the ask to the right bot",
  },
  {
    id: "WszXQvrcVT5tSqlASLijR",
    slug: "replicator",
    name: "Replicator",
    description:
      "Converts any Grok Bot into a ChatGPT Dot. Builds a paste kit from the share page and can apply it live in ChatGPT desktop when you are signed in.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/WszXQvrcVT5tSqlASLijR",
    sourceUrl: "https://x.com/monomyth/status/2105088360335483033",
    ogImage: null,
    announcedAt: "2026-09-30T00:12:30.000Z",
    category: "Bridge",
    cover: "/samples/replicator-tea.jpg",
    exampleKind: "replicator",
    featured: true,
    sampleCaption: "Space Monkey, rewritten as a ChatGPT Dot paste kit",
    task: "clone a Grok Bot share into a ChatGPT Dot paste kit",
  },
  {
    id: "ex1gjM_9lKmE4pLJG8o_M",
    slug: "handel",
    name: "Handel",
    description:
      "Track doppelgänger. Captures what is playing on your Mac, Windows, or Linux machine — or an attached clip — reverse-engineers the DNA, and writes a Suno prompt for a harder-hitting cousin.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/ex1gjM_9lKmE4pLJG8o_M",
    sourceUrl: "https://x.com/monomyth/status/2102600853907804241",
    ogImage: null,
    announcedAt: "2026-09-23T03:28:02.000Z",
    category: "Sound",
    cover: "/samples/handel-cover.jpg",
    exampleKind: "handel",
    featured: true,
    sampleCaption: "Warehouse loop → harder Suno cousin",
    task: "capture a loop, read groove / hook / lane / vocal, write a harder Suno prompt",
  },
  {
    id: "438hek2SIHhpHn9FDlQCe",
    slug: "space-monkey",
    name: "Space Monkey",
    description:
      "Launch brief specialist for any orbital or suborbital flight — past, planned, scrubbed, or failed. Ships dark orbital HTML web cards with specs, photo, video, and three flight-specific facts.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/438hek2SIHhpHn9FDlQCe",
    sourceUrl: "https://x.com/monomyth/status/2100667579220333031",
    ogImage: null,
    announcedAt: "2026-09-17T19:25:54.000Z",
    category: "Launch",
    cover: "/samples/space-monkey-cover.jpg",
    exampleKind: "space-monkey",
    featured: true,
    sampleCaption: "Starship Flight 11 — planned, Starbase, Raptor 3 stack",
    task: "checklist brief for any orbital or suborbital launch: vehicle, engines, propellant, payload, photo, video, three facts",
  },
  {
    id: "Y2-3YXQhppPkm5IwYWqTE",
    slug: "data-ink",
    name: "Data Ink",
    description:
      "R + Tufte-clean plots and maps for anyone who wants chart-first analysis. Hand it a CSV, paste, path, or public table — it returns the figure.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/Y2-3YXQhppPkm5IwYWqTE",
    sourceUrl: "https://x.com/monomyth/status/2100379906467348676",
    ogImage: null,
    announcedAt: "2026-09-17T00:22:47.000Z",
    category: "Analysis",
    cover: "/samples/data-ink-crows.jpg",
    exampleKind: "data-ink",
    featured: true,
    sampleCaption: "American Crow density, contiguous United States",
    task: 'density of crows in the USA',
  },
  {
    id: "xpTH6yslvNJuuPq5mO01a",
    slug: "yusician",
    name: "Yusician",
    description:
      "Generates songs with yue2-mlx on Apple Silicon (MLX/Metal). Style + lyrics in, 48 kHz WAV out. Model weights are CC BY-NC 4.0 — non-commercial only.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/xpTH6yslvNJuuPq5mO01a",
    sourceUrl: "https://x.com/monomyth/status/2100267366886342768",
    ogImage: null,
    announcedAt: "2026-09-16T16:55:36.000Z",
    category: "Sound",
    cover: "/samples/yusician-cover.jpg",
    exampleKind: "yusician",
    featured: true,
    sampleCaption: "Local YuE2 recreation — industrial electronic, Mac Metal",
    task: "recreate a Gesaffelstein-class industrial electronic track locally with YuE2",
  },
  {
    id: "mT2L0I5XyIr-jGXXIIxYT",
    slug: "solid-vibe",
    name: "Solid Vibe",
    description:
      "Precision CAD specialist for parametric solids, STEP/STL/3MF, and AI-assisted FreeCAD/VibeCAD. Engineers dimensioned briefs, stages complex builds, and falls back to Python/freecadcmd when the in-app assistant stalls.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/mT2L0I5XyIr-jGXXIIxYT",
    sourceUrl: "https://x.com/monomyth/status/2099950312459252169",
    ogImage: null,
    announcedAt: "2026-09-15T19:55:44.000Z",
    category: "Engineering",
    cover: "/samples/solid-vibe-drawing.jpg",
    exampleKind: "solid-vibe",
    featured: true,
    sampleCaption: "WF-17 titanium mounting flange — first-angle, millimetres",
    task: "dimensioned CAD brief for a precision titanium mounting flange, STEP/STL/3MF",
  },
  {
    id: "l_MfrDAGFed5t2A9Wrzqz",
    slug: "neuroscience",
    name: "Neuroscience",
    description:
      "Neuroscience / BCI specialist. Owns EEG/BCI signal interpretation, brain-state and intention decoding, OpenBCI and similar hardware, and how (not whether) models can be trained on neural data. Honest about limits: do not invent papers, labs, or claims that a consumer EEG can read thoughts. Stay technical and concrete. Ask before publishing anything externally.",
    author: AUTHOR,
    shareUrl: "https://x.ai/bot/l_MfrDAGFed5t2A9Wrzqz",
    sourceUrl: "https://x.com/monomyth/status/2093485744405065866",
    ogImage: null,
    announcedAt: "2026-08-28T23:47:51.000Z",
    category: "Signals",
    cover: "/samples/neuroscience-eeg.jpg",
    exampleKind: "neuroscience",
    featured: true,
    sampleCaption: "Four-channel EEG, band-power decoder — no thought-reading",
    task: "interpret a 4-channel EEG stream into band power and a cautious brain-state label",
  },
];

export const SEED_BY_ID = Object.fromEntries(SEED_BOTS.map((b) => [b.id, b]));

export const BOT_ID_RE = /x\.ai\/bot\/([A-Za-z0-9_-]{12,})/gi;

export function extractBotIds(text: string): string[] {
  const ids = new Set<string>();
  const re = new RegExp(BOT_ID_RE.source, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m[1]) ids.add(m[1]);
  }
  return [...ids];
}

export function mergeBot(seed: FleetBot | undefined, scanned: Partial<FleetBot> & { id: string }): FleetBot {
  const name = scanned.name?.trim() || seed?.name || "Untitled Bot";
  return {
    id: scanned.id,
    slug: scanned.slug || seed?.slug || slugFromName(name, scanned.id),
    name,
    description: scanned.description?.trim() || seed?.description || "",
    author: scanned.author || seed?.author || AUTHOR,
    shareUrl: scanned.shareUrl || seed?.shareUrl || `https://x.ai/bot/${scanned.id}`,
    sourceUrl: scanned.sourceUrl ?? seed?.sourceUrl ?? null,
    siteUrl: scanned.siteUrl ?? seed?.siteUrl ?? null,
    ogImage: scanned.ogImage ?? seed?.ogImage ?? null,
    announcedAt: scanned.announcedAt || seed?.announcedAt || new Date().toISOString(),
    category: scanned.category || seed?.category || "Unsorted",
    cover: seed?.cover || scanned.cover || scanned.ogImage || "/samples/data-ink-crows.jpg",
    exampleKind: seed?.exampleKind ?? scanned.exampleKind ?? null,
    featured: seed?.featured ?? false,
    sampleCaption: seed?.sampleCaption || scanned.sampleCaption || "Field sample",
    task: seed?.task || scanned.task || "",
  };
}

export function slugFromName(name: string, id: string) {
  const s = name
    .toLowerCase()
    .replace(/by eugene$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
  return s || `bot-${id.slice(0, 8).toLowerCase()}`;
}

export type FleetSnapshot = {
  bots: FleetBot[];
  lastScanAt: string | null;
  lastScanNotes: string | null;
  source: "seed" | "desk";
};
