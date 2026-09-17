//#region node_modules/.nitro/vite/services/ssr/assets/catalog-D8pT5eOG.js
var HANDLE = "monomyth";
var AUTHOR = "Eugene";
var X_PROFILE = `https://x.com/${HANDLE}`;
var SCAN_SINCE = "2026-08-11";
var SEED_BOTS = [
	{
		id: "Y2-3YXQhppPkm5IwYWqTE",
		slug: "data-ink",
		name: "Data Ink",
		description: "R + Tufte-clean plots and maps for anyone who wants chart-first analysis. Hand it a CSV, paste, path, or public table — it returns the figure.",
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
		task: "density of crows in the USA"
	},
	{
		id: "xpTH6yslvNJuuPq5mO01a",
		slug: "yusician",
		name: "Yusician",
		description: "Generates songs with yue2-mlx on Apple Silicon (MLX/Metal). Style + lyrics in, 48 kHz WAV out. Model weights are CC BY-NC 4.0 — non-commercial only.",
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
		task: "recreate a Gesaffelstein-class industrial electronic track locally with YuE2"
	},
	{
		id: "mT2L0I5XyIr-jGXXIIxYT",
		slug: "solid-vibe",
		name: "Solid Vibe",
		description: "Precision CAD specialist for parametric solids, STEP/STL/3MF, and AI-assisted FreeCAD/VibeCAD. Engineers dimensioned briefs, stages complex builds, and falls back to Python/freecadcmd when the in-app assistant stalls.",
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
		task: "dimensioned CAD brief for a precision titanium mounting flange, STEP/STL/3MF"
	},
	{
		id: "l_MfrDAGFed5t2A9Wrzqz",
		slug: "neuroscience",
		name: "Neuroscience",
		description: "Neuroscience / BCI specialist. Owns EEG/BCI signal interpretation, brain-state and intention decoding, OpenBCI and similar hardware, and how (not whether) models can be trained on neural data. Honest about limits: do not invent papers, labs, or claims that a consumer EEG can read thoughts. Stay technical and concrete. Ask before publishing anything externally.",
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
		task: "interpret a 4-channel EEG stream into band power and a cautious brain-state label"
	}
];
var SEED_BY_ID = Object.fromEntries(SEED_BOTS.map((b) => [b.id, b]));
var BOT_ID_RE = /x\.ai\/bot\/([A-Za-z0-9_-]{12,})/gi;
function extractBotIds(text) {
	const ids = /* @__PURE__ */ new Set();
	const re = new RegExp(BOT_ID_RE.source, "gi");
	let m;
	while (m = re.exec(text)) if (m[1]) ids.add(m[1]);
	return [...ids];
}
function mergeBot(seed, scanned) {
	const name = scanned.name?.trim() || seed?.name || "Untitled Bot";
	return {
		id: scanned.id,
		slug: scanned.slug || seed?.slug || slugFromName(name, scanned.id),
		name,
		description: scanned.description?.trim() || seed?.description || "",
		author: scanned.author || seed?.author || "Eugene",
		shareUrl: scanned.shareUrl || seed?.shareUrl || `https://x.ai/bot/${scanned.id}`,
		sourceUrl: scanned.sourceUrl ?? seed?.sourceUrl ?? null,
		ogImage: scanned.ogImage ?? seed?.ogImage ?? null,
		announcedAt: scanned.announcedAt || seed?.announcedAt || (/* @__PURE__ */ new Date()).toISOString(),
		category: scanned.category || seed?.category || "Unsorted",
		cover: seed?.cover || scanned.cover || scanned.ogImage || "/samples/data-ink-crows.jpg",
		exampleKind: seed?.exampleKind ?? scanned.exampleKind ?? null,
		featured: seed?.featured ?? false,
		sampleCaption: seed?.sampleCaption || scanned.sampleCaption || "Field sample",
		task: seed?.task || scanned.task || ""
	};
}
function slugFromName(name, id) {
	return name.toLowerCase().replace(/by eugene$/i, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48) || `bot-${id.slice(0, 8).toLowerCase()}`;
}
//#endregion
export { X_PROFILE as a, slugFromName as c, SEED_BY_ID as i, SCAN_SINCE as n, extractBotIds as o, SEED_BOTS as r, mergeBot as s, HANDLE as t };
