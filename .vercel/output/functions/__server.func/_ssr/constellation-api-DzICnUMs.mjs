import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
import { a as PILOT_URL } from "./constellation-CK7A9zJF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/constellation-api-DzICnUMs.js
var pingSisterDesk_createServerFn_handler = createServerRpc({
	id: "620663095c02e7a22c6a5c8193c22d07c33b2d6f6984fa9650cb6e7b447f79ce",
	name: "pingSisterDesk",
	filename: "src/lib/constellation-api.ts"
}, (opts) => pingSisterDesk.__executeServer(opts));
var pingSisterDesk = createServerFn({ method: "GET" }).handler(pingSisterDesk_createServerFn_handler, async () => {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), 4e3);
	try {
		const res = await fetch(PILOT_URL, {
			method: "GET",
			signal: ctrl.signal,
			headers: {
				"User-Agent": "FLEET-constellation/1.0",
				Accept: "text/html"
			}
		});
		return {
			url: PILOT_URL,
			live: res.ok
		};
	} catch {
		return {
			url: PILOT_URL,
			live: false
		};
	} finally {
		clearTimeout(t);
	}
});
//#endregion
export { pingSisterDesk_createServerFn_handler };
