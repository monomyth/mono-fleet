import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
import { c as slugFromName, i as SEED_BY_ID, n as SCAN_SINCE, o as extractBotIds, r as SEED_BOTS, s as mergeBot, t as HANDLE } from "./catalog-D8pT5eOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BftNNlBR.js
var SCAN_COOLDOWN_MS = 9e4;
var FETCH_MS = 1e4;
var memory = {
	bots: new Map(SEED_BOTS.map((b) => [b.id, b])),
	lastScanAt: null,
	lastScanNotes: null
};
function decodeEntities(s) {
	return s.replace(/&/g, "&").replace(/"/g, "\"").replace(/&#39;/g, "'").replace(/</g, "<").replace(/>/g, ">");
}
function meta(html, key) {
	const patterns = [new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["']`, "i"), new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`, "i")];
	for (const re of patterns) {
		const m = html.match(re);
		if (m?.[1]) return decodeEntities(m[1]);
	}
	return "";
}
async function fetchText(url) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), FETCH_MS);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: {
				"User-Agent": "FLEET-catalog/1.0",
				Accept: "text/html,application/json"
			}
		});
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	} finally {
		clearTimeout(t);
	}
}
async function hydrateSharePage(id) {
	const html = await fetchText(`https://x.ai/bot/${id}`);
	if (!html) return {
		id,
		shareUrl: `https://x.ai/bot/${id}`
	};
	const title = meta(html, "og:title") || html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
	const description = meta(html, "og:description") || meta(html, "description");
	const ogImage = meta(html, "og:image") || null;
	const name = title.replace(/\s+by\s+Eugene\s*$/i, "").trim() || `Bot ${id.slice(0, 6)}`;
	return {
		id,
		name,
		description,
		ogImage,
		shareUrl: `https://x.ai/bot/${id}`,
		slug: slugFromName(name, id),
		author: "Eugene"
	};
}
async function scanGrokBotsBest() {
	const raw = await fetchText("https://grokbots.best/api/bots");
	if (!raw) return [];
	try {
		const rows = JSON.parse(raw);
		if (!Array.isArray(rows)) return [];
		const mine = rows.filter((r) => (r.author ?? "").replace(/^@/, "").toLowerCase() === HANDLE);
		const hits = [];
		for (const row of mine) {
			let ids = extractBotIds(`${row.url ?? ""} ${row.source_url ?? ""} ${row.description ?? ""}`);
			if (!ids.length && row.url) {
				const page = await fetchText(row.url);
				if (page) ids = extractBotIds(page);
			}
			const byName = SEED_BOTS.find((b) => b.name.toLowerCase() === (row.name ?? "").trim().toLowerCase());
			const id = ids[0] ?? byName?.id;
			if (!id) continue;
			hits.push({
				id,
				name: row.name,
				description: row.description,
				sourceUrl: row.source_url ?? byName?.sourceUrl ?? null,
				announcedAt: row.created_at,
				category: row.categories?.[0],
				shareUrl: `https://x.ai/bot/${id}`
			});
		}
		return hits;
	} catch {
		return [];
	}
}
function collectText(value, into) {
	if (typeof value === "string") {
		into.push(value);
		return;
	}
	if (Array.isArray(value)) {
		for (const v of value) collectText(v, into);
		return;
	}
	if (value && typeof value === "object") for (const v of Object.values(value)) collectText(v, into);
}
async function scanXViaGrok() {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		hits: [],
		notes: "xAI key unavailable — used public catalogs only."
	};
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), 18e3);
	try {
		const res = await fetch("https://api.x.ai/v1/responses", {
			method: "POST",
			signal: ctrl.signal,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				max_output_tokens: 900,
				input: [{
					role: "user",
					content: `Search X for posts by @${HANDLE} since ${SCAN_SINCE} that announce or share a Grok Bot. Look for x.ai/bot/ links. Return ONLY a JSON array of objects with keys url (the x.ai/bot share link), post (x.com status URL), text (post body), date (ISO or YYYY-MM-DD). Include every distinct bot. No markdown.`
				}],
				tools: [{
					type: "x_search",
					allowed_x_handles: [HANDLE],
					from_date: SCAN_SINCE
				}]
			})
		});
		if (!res.ok) return {
			hits: [],
			notes: `X search returned ${res.status}.`
		};
		const body = await res.json();
		const blobs = [];
		collectText(body, blobs);
		const combined = blobs.join("\n");
		const ids = extractBotIds(combined);
		const postRe = /https?:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]+\/status\/(\d+)/g;
		const posts = [];
		let pm;
		while (pm = postRe.exec(combined)) posts.push(`https://x.com/monomyth/status/${pm[1]}`);
		const hits = ids.map((id, i) => ({
			id,
			shareUrl: `https://x.ai/bot/${id}`,
			sourceUrl: posts[i] ?? posts[0] ?? null
		}));
		return {
			hits,
			notes: hits.length ? `X search found ${hits.length} share link${hits.length === 1 ? "" : "s"}.` : "X search ran; no new share links in the window."
		};
	} catch {
		return {
			hits: [],
			notes: "X search timed out; catalog sources still applied."
		};
	} finally {
		clearTimeout(t);
	}
}
function snapshotFrom(bots, lastScanAt, lastScanNotes, source) {
	const byId = /* @__PURE__ */ new Map();
	for (const b of SEED_BOTS) byId.set(b.id, b);
	for (const b of bots) byId.set(b.id, mergeBot(SEED_BY_ID[b.id], b));
	return {
		bots: [...byId.values()].sort((a, b) => (b.announcedAt || "").localeCompare(a.announcedAt || "")),
		lastScanAt,
		lastScanNotes,
		source
	};
}
async function getDeskSql() {
	if (!process.env.DATABASE_URL?.trim()) return null;
	try {
		return await (await import("./db-B3HrgF_w.mjs")).getSql();
	} catch {
		return null;
	}
}
function rowToBot(row) {
	const payload = typeof row.payload === "string" ? JSON.parse(row.payload) : row.payload && typeof row.payload === "object" ? row.payload : {};
	const seed = SEED_BY_ID[row.id];
	return mergeBot(seed, {
		id: row.id,
		slug: row.slug,
		name: row.name,
		description: row.description,
		shareUrl: row.share_url,
		sourceUrl: row.source_url,
		ogImage: row.og_image,
		announcedAt: row.announced_at ?? void 0,
		category: row.category,
		cover: typeof payload.cover === "string" ? payload.cover : void 0,
		exampleKind: seed?.exampleKind ?? null,
		featured: seed?.featured ?? false,
		sampleCaption: typeof payload.sampleCaption === "string" ? payload.sampleCaption : void 0,
		task: typeof payload.task === "string" ? payload.task : void 0,
		author: typeof payload.author === "string" ? payload.author : void 0
	});
}
async function persistBots(sql, bots) {
	for (const bot of bots) await sql`
      insert into fleet_bots (
        id, slug, name, description, share_url, source_url, og_image,
        announced_at, category, payload, last_seen_at
      ) values (
        ${bot.id}, ${bot.slug}, ${bot.name}, ${bot.description}, ${bot.shareUrl},
        ${bot.sourceUrl}, ${bot.ogImage}, ${bot.announcedAt}::timestamptz,
        ${bot.category}, ${JSON.stringify({
		cover: bot.cover,
		exampleKind: bot.exampleKind,
		featured: bot.featured,
		sampleCaption: bot.sampleCaption,
		task: bot.task,
		author: bot.author
	})}::jsonb, now()
      )
      on conflict (id) do update set
        slug = excluded.slug,
        name = excluded.name,
        description = excluded.description,
        share_url = excluded.share_url,
        source_url = coalesce(excluded.source_url, fleet_bots.source_url),
        og_image = coalesce(excluded.og_image, fleet_bots.og_image),
        announced_at = coalesce(excluded.announced_at, fleet_bots.announced_at),
        category = excluded.category,
        payload = excluded.payload,
        last_seen_at = now()
    `;
}
async function readDesk() {
	const sql = await getDeskSql();
	if (!sql) return snapshotFrom([...memory.bots.values()], memory.lastScanAt, memory.lastScanNotes, "seed");
	if ((await sql`select id from fleet_bots`).length === 0) await persistBots(sql, SEED_BOTS);
	const rows = await sql`
    select id, slug, name, description, share_url, source_url, og_image,
           announced_at::text as announced_at, category, payload
    from fleet_bots
    order by announced_at desc nulls last
  `;
	const scans = await sql`
    select scanned_at::text as scanned_at, notes
    from fleet_scans
    order by scanned_at desc
    limit 1
  `;
	return snapshotFrom(rows.map(rowToBot), scans[0]?.scanned_at ?? null, scans[0]?.notes ?? null, "desk");
}
var listFleet_createServerFn_handler = createServerRpc({
	id: "c05d43bedc27568a66bd53e4bfa4ee39b662c3a52042e7588e7659ec34adb2c6",
	name: "listFleet",
	filename: "src/lib/fleet/api.ts"
}, (opts) => listFleet.__executeServer(opts));
var listFleet = createServerFn({ method: "GET" }).handler(listFleet_createServerFn_handler, async () => readDesk());
var scanFleet_createServerFn_handler = createServerRpc({
	id: "765b6cf6e91c0b9b58c2b2c1b0abff3b384d372d54855bf49e9a6fa1dd79f268",
	name: "scanFleet",
	filename: "src/lib/fleet/api.ts"
}, (opts) => scanFleet.__executeServer(opts));
var scanFleet = createServerFn({ method: "POST" }).handler(scanFleet_createServerFn_handler, async () => {
	const sql = await getDeskSql();
	if (memory.lastScanAt) {
		const age = Date.now() - new Date(memory.lastScanAt).getTime();
		if (Number.isFinite(age) && age < SCAN_COOLDOWN_MS) return {
			...await readDesk(),
			added: 0,
			notes: "Scan is cooling down — catalog is current."
		};
	}
	const [catalogHits, xResult] = await Promise.all([scanGrokBotsBest(), scanXViaGrok()]);
	const byId = /* @__PURE__ */ new Map();
	for (const b of SEED_BOTS) byId.set(b.id, { id: b.id });
	for (const h of catalogHits) byId.set(h.id, {
		...byId.get(h.id),
		...h
	});
	for (const h of xResult.hits) byId.set(h.id, {
		...byId.get(h.id),
		...h
	});
	const beforeIds = new Set(memory.bots.keys());
	const hydrated = await Promise.all([...byId.values()].map(async (hit) => {
		const page = await hydrateSharePage(hit.id);
		return mergeBot(SEED_BY_ID[hit.id], {
			...hit,
			...page,
			id: hit.id
		});
	}));
	for (const bot of hydrated) memory.bots.set(bot.id, bot);
	const added = hydrated.filter((b) => !beforeIds.has(b.id) && !SEED_BY_ID[b.id]).length;
	const notes = [
		xResult.notes,
		catalogHits.length ? `Public catalog matched ${catalogHits.length}.` : "",
		added ? `${added} new bot${added === 1 ? "" : "s"} added.` : "No new bots this pass."
	].filter(Boolean).join(" ");
	memory.lastScanAt = (/* @__PURE__ */ new Date()).toISOString();
	memory.lastScanNotes = notes;
	if (sql) {
		await persistBots(sql, hydrated);
		await sql`
        insert into fleet_scans (source, found_count, notes)
        values (${"x+catalog+share"}, ${hydrated.length}, ${notes})
      `;
	}
	return {
		...await readDesk(),
		added,
		notes
	};
});
//#endregion
export { listFleet_createServerFn_handler, scanFleet_createServerFn_handler };
