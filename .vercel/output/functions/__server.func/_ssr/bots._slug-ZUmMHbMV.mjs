import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PILOT_URL } from "./constellation-CK7A9zJF.mjs";
import { a as ArrowLeft, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CFGeKKKO.mjs";
import { a as cn, i as FleetHeader, n as Button, o as formatDeskDate, r as ConstellationFooter, t as Badge } from "./badge-CidSujEf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bots._slug-ZUmMHbMV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CELLS = [
	{
		id: "WA",
		q: 0,
		r: 1,
		v: 28,
		name: "Washington"
	},
	{
		id: "OR",
		q: 0,
		r: 2,
		v: 32,
		name: "Oregon"
	},
	{
		id: "CA",
		q: 0,
		r: 3,
		v: 36,
		name: "California"
	},
	{
		id: "NV",
		q: 1,
		r: 2,
		v: 22,
		name: "Nevada"
	},
	{
		id: "ID",
		q: 1,
		r: 1,
		v: 30,
		name: "Idaho"
	},
	{
		id: "MT",
		q: 2,
		r: 1,
		v: 41,
		name: "Montana"
	},
	{
		id: "WY",
		q: 2,
		r: 2,
		v: 34,
		name: "Wyoming"
	},
	{
		id: "UT",
		q: 2,
		r: 3,
		v: 26,
		name: "Utah"
	},
	{
		id: "AZ",
		q: 1,
		r: 3,
		v: 24,
		name: "Arizona"
	},
	{
		id: "CO",
		q: 3,
		r: 3,
		v: 38,
		name: "Colorado"
	},
	{
		id: "NM",
		q: 2,
		r: 4,
		v: 29,
		name: "New Mexico"
	},
	{
		id: "ND",
		q: 3,
		r: 1,
		v: 55,
		name: "North Dakota"
	},
	{
		id: "SD",
		q: 3,
		r: 2,
		v: 68,
		name: "South Dakota"
	},
	{
		id: "NE",
		q: 4,
		r: 2,
		v: 82,
		name: "Nebraska"
	},
	{
		id: "KS",
		q: 4,
		r: 3,
		v: 88,
		name: "Kansas"
	},
	{
		id: "OK",
		q: 4,
		r: 4,
		v: 76,
		name: "Oklahoma"
	},
	{
		id: "TX",
		q: 3,
		r: 4,
		v: 71,
		name: "Texas"
	},
	{
		id: "MN",
		q: 4,
		r: 1,
		v: 79,
		name: "Minnesota"
	},
	{
		id: "IA",
		q: 5,
		r: 2,
		v: 94,
		name: "Iowa"
	},
	{
		id: "MO",
		q: 5,
		r: 3,
		v: 90,
		name: "Missouri"
	},
	{
		id: "AR",
		q: 5,
		r: 4,
		v: 64,
		name: "Arkansas"
	},
	{
		id: "LA",
		q: 5,
		r: 5,
		v: 48,
		name: "Louisiana"
	},
	{
		id: "WI",
		q: 5,
		r: 1,
		v: 84,
		name: "Wisconsin"
	},
	{
		id: "IL",
		q: 6,
		r: 2,
		v: 96,
		name: "Illinois"
	},
	{
		id: "IN",
		q: 7,
		r: 2,
		v: 91,
		name: "Indiana"
	},
	{
		id: "MI",
		q: 6,
		r: 1,
		v: 62,
		name: "Michigan"
	},
	{
		id: "OH",
		q: 8,
		r: 2,
		v: 80,
		name: "Ohio"
	},
	{
		id: "KY",
		q: 6,
		r: 3,
		v: 72,
		name: "Kentucky"
	},
	{
		id: "TN",
		q: 6,
		r: 4,
		v: 58,
		name: "Tennessee"
	},
	{
		id: "MS",
		q: 6,
		r: 5,
		v: 44,
		name: "Mississippi"
	},
	{
		id: "AL",
		q: 7,
		r: 5,
		v: 42,
		name: "Alabama"
	},
	{
		id: "GA",
		q: 8,
		r: 5,
		v: 40,
		name: "Georgia"
	},
	{
		id: "FL",
		q: 8,
		r: 6,
		v: 38,
		name: "Florida"
	},
	{
		id: "SC",
		q: 9,
		r: 5,
		v: 36,
		name: "South Carolina"
	},
	{
		id: "NC",
		q: 8,
		r: 4,
		v: 46,
		name: "North Carolina"
	},
	{
		id: "VA",
		q: 8,
		r: 3,
		v: 52,
		name: "Virginia"
	},
	{
		id: "WV",
		q: 7,
		r: 3,
		v: 48,
		name: "West Virginia"
	},
	{
		id: "PA",
		q: 9,
		r: 2,
		v: 58,
		name: "Pennsylvania"
	},
	{
		id: "NY",
		q: 9,
		r: 1,
		v: 54,
		name: "New York"
	},
	{
		id: "VT",
		q: 10,
		r: 1,
		v: 26,
		name: "Vermont"
	},
	{
		id: "NH",
		q: 11,
		r: 1,
		v: 24,
		name: "New Hampshire"
	},
	{
		id: "ME",
		q: 12,
		r: 1,
		v: 22,
		name: "Maine"
	},
	{
		id: "MA",
		q: 11,
		r: 2,
		v: 30,
		name: "Massachusetts"
	},
	{
		id: "CT",
		q: 10,
		r: 2,
		v: 32,
		name: "Connecticut"
	},
	{
		id: "NJ",
		q: 10,
		r: 3,
		v: 34,
		name: "New Jersey"
	},
	{
		id: "DE",
		q: 9,
		r: 3,
		v: 28,
		name: "Delaware"
	},
	{
		id: "MD",
		q: 9,
		r: 4,
		v: 40,
		name: "Maryland"
	},
	{
		id: "AK",
		q: 0,
		r: 6,
		v: 8,
		name: "Alaska"
	},
	{
		id: "HI",
		q: 1,
		r: 6,
		v: 6,
		name: "Hawaii"
	}
];
function hexPoints(cx, cy, size) {
	const pts = [];
	for (let i = 0; i < 6; i++) {
		const a = Math.PI / 180 * (60 * i - 30);
		pts.push(`${cx + size * Math.cos(a)},${cy + size * Math.sin(a)}`);
	}
	return pts.join(" ");
}
function fillFor(v) {
	const t = Math.min(1, Math.max(0, v / 100));
	return `rgb(${Math.round(232 - t * 160)} ${Math.round(226 - t * 190)} ${Math.round(214 - t * 175)})`;
}
function DataInkExample() {
	const [hover, setHover] = (0, import_react.useState)(null);
	const size = 16;
	const w = Math.sqrt(3) * size;
	const h = 1.5 * size;
	const layout = (0, import_react.useMemo)(() => CELLS.map((c) => ({
		...c,
		x: 28 + c.q * w + (c.r % 2 ? w / 2 : 0),
		y: 26 + c.r * h
	})), [w, h]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "overflow-hidden rounded-lg bg-paper p-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/samples/data-ink-crows.jpg",
				alt: "American Crow density choropleth produced by Data Ink",
				className: "h-auto w-full rounded-md outline outline-1 -outline-offset-1 outline-paper-ink/15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 px-2 pb-1 font-mono text-[11px] tracking-wide text-paper-ink/70",
				children: "Field sample · R ggplot2 / sf · American Crow, 2014–2018"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col rounded-lg bg-paper p-4 text-paper-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] uppercase",
						children: "Hex cartogram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-paper-ink/55",
						children: "birds / km²"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 280 160",
					className: "mt-3 w-full",
					role: "img",
					"aria-label": "Interactive hex cartogram of American Crow density",
					children: layout.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: hexPoints(c.x, c.y, 15.2),
						fill: fillFor(c.v),
						stroke: "#1c1a16",
						strokeOpacity: hover?.id === c.id ? .8 : .18,
						strokeWidth: hover?.id === c.id ? 1.4 : .4,
						className: "cursor-pointer",
						onMouseEnter: () => setHover(c),
						onMouseLeave: () => setHover(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: c.x,
						y: c.y + 1,
						textAnchor: "middle",
						fontSize: "6.5",
						fontFamily: "IBM Plex Mono, monospace",
						fill: c.v > 55 ? "#f4efe4" : "#1c1a16",
						className: "pointer-events-none",
						children: c.id
					})] }, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mt-auto flex items-end justify-between gap-3 pt-3 font-mono text-xs"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-wide text-paper-ink/55 uppercase",
						children: hover ? hover.name : "Midwest peak"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-lg leading-none",
						children: [hover ? hover.v.toFixed(0) : "96", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-[11px] text-paper-ink/55",
							children: "idx"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[16ch] text-right text-[11px] leading-snug text-paper-ink/60",
						children: "Ink on paper. No 3D. No rainbow."
					})]
				})
			]
		})]
	});
}
var VIDEO_SRC = "https://video.twimg.com/amplify_video/2100352658481790976/vid/avc1/1280x720/HH74U2qLdD74-qx7.mp4";
function YusicianExample() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let t = 0;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const draw = () => {
			const { width: w, height: h } = canvas;
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = "#0c0d0b";
			ctx.fillRect(0, 0, w, h);
			const bars = 72;
			const gap = 2;
			const bw = (w - 146) / bars;
			for (let i = 0; i < bars; i++) {
				const n = .22 + .55 * Math.abs(Math.sin(i * .17 + t * 1.4)) + .25 * Math.abs(Math.sin(i * .41 + t * 2.7)) + .12 * Math.abs(Math.sin(i * .09 + t * .6));
				const bh = Math.max(4, n * (h * .78));
				ctx.fillStyle = i % 11 === 0 ? "#eceae3" : "#8d8b82";
				ctx.globalAlpha = .55 + n * .45;
				ctx.fillRect(gap + i * (bw + gap), (h - bh) / 2, bw, bh);
			}
			ctx.globalAlpha = 1;
			if (!reduce) {
				t += .035;
				raf = requestAnimationFrame(draw);
			}
		};
		draw();
		return () => cancelAnimationFrame(raf);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-lg bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "aspect-video w-full bg-bg object-cover outline outline-1 -outline-offset-1 outline-fg/10",
				controls: true,
				playsInline: true,
				poster: "/samples/yusician-cover.jpg",
				src: VIDEO_SRC,
				children: "Your browser cannot play this sample."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-3 font-mono text-[11px] tracking-wide text-muted",
				children: "Posted sample · YuE2 on Apple Silicon · 48 kHz WAV · CC BY-NC 4.0"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 640,
				height: 180,
				className: "h-32 w-full rounded-md bg-bg outline outline-1 -outline-offset-1 outline-fg/10",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-raised p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
						children: "Prompt in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl leading-snug text-fg italic",
						children: "Industrial electronic. Dry kick. Analog stab. No vocal. Warehouse at 2 a.m."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
						children: "File out"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-sm text-fg",
						children: "track.wav · 48 kHz · non-commercial"
					})
				]
			})]
		})]
	});
}
var DIMS = [
	{
		id: "od",
		label: "Ø 86.0",
		hint: "outer diameter"
	},
	{
		id: "id",
		label: "Ø 22.0",
		hint: "bore"
	},
	{
		id: "pcd",
		label: "PCD 62.0",
		hint: "bolt circle"
	},
	{
		id: "thk",
		label: "8.0 THK",
		hint: "stock thickness"
	}
];
function SolidVibeExample() {
	const [hot, setHot] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "overflow-hidden rounded-lg bg-paper p-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/samples/solid-vibe-drawing.jpg",
				alt: "Orthographic technical drawing of a titanium mounting flange",
				className: "h-auto w-full rounded-md outline outline-1 -outline-offset-1 outline-paper-ink/15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 px-2 pb-1 font-mono text-[11px] tracking-wide text-paper-ink/70",
				children: "Vellum plot · first-angle projection · millimetres"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-paper p-4 text-paper-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] uppercase",
						children: "WF-17 flange"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-paper-ink/55",
						children: "Ti-6Al-4V"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 320 260",
					className: "mt-2 w-full",
					role: "img",
					"aria-label": "Dimensioned drawing of a six-bolt titanium flange",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: "#1c1a16",
						strokeLinecap: "round",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "150",
								cy: "130",
								r: "78",
								strokeWidth: hot === "od" ? 2.2 : 1.1,
								className: "transition-[stroke-width] duration-150"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "150",
								cy: "130",
								r: "56",
								strokeDasharray: "3 3",
								strokeOpacity: .55,
								strokeWidth: hot === "pcd" ? 1.8 : .8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "150",
								cy: "130",
								r: "20",
								strokeWidth: hot === "id" ? 2.2 : 1.1
							}),
							Array.from({ length: 6 }).map((_, i) => {
								const a = Math.PI / 3 * i - Math.PI / 2;
								const x = 150 + Math.cos(a) * 56;
								const y = 130 + Math.sin(a) * 56;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: x,
									cy: y,
									r: "5.5",
									strokeWidth: 1,
									className: "fill-paper"
								}, i);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "150",
								y1: "48",
								x2: "150",
								y2: "212",
								strokeOpacity: .25
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "68",
								y1: "130",
								x2: "232",
								y2: "130",
								strokeOpacity: .25
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								strokeOpacity: hot === "od" ? 1 : .55,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "150",
										y1: "52",
										x2: "248",
										y2: "52"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "248",
										y1: "52",
										x2: "248",
										y2: "208"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "228",
										y1: "52",
										x2: "248",
										y2: "52"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "228",
										y1: "208",
										x2: "248",
										y2: "208"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "258",
								y: "136",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "11",
								fill: "#1c1a16",
								children: "Ø86"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "150",
								y: "126",
								textAnchor: "middle",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "9",
								fill: "#1c1a16",
								children: "Ø22"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "196",
								y: "96",
								fontFamily: "IBM Plex Mono, monospace",
								fontSize: "9",
								fill: "#1c1a16",
								children: "6×Ø6.5"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: DIMS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onMouseEnter: () => setHot(d.id),
						onMouseLeave: () => setHot(null),
						onFocus: () => setHot(d.id),
						onBlur: () => setHot(null),
						className: cn("flex h-11 w-full items-center justify-between rounded-sm px-3 text-left font-mono text-xs", "shadow-[0_0_0_1px_rgba(28,26,22,0.12)] transition-colors duration-150", hot === d.id ? "bg-paper-ink text-paper" : "bg-transparent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: hot === d.id ? "text-paper/70" : "text-paper-ink/50",
							children: d.hint
						})]
					}) }, d.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-[11px] text-paper-ink/55",
					children: "Exports STEP / STL / 3MF · Python fallback if the GUI stalls"
				})
			]
		})]
	});
}
var CHANNELS = [
	"C3",
	"C4",
	"Cz",
	"Pz"
];
function sample(t, ch) {
	const alpha = Math.sin(2 * Math.PI * 10 * t + ch) * .45;
	const beta = Math.sin(2 * Math.PI * 22 * t + ch * .7) * .18;
	const theta = Math.sin(2 * Math.PI * 6 * t + ch * 1.3) * .22;
	const noise = (Math.sin(t * 47 + ch * 13) + Math.sin(t * 91 + ch)) * .05;
	return alpha + beta + theta + noise;
}
function NeuroscienceExample() {
	const canvasRef = (0, import_react.useRef)(null);
	const [bands, setBands] = (0, import_react.useState)({
		alpha: 42,
		beta: 21,
		theta: 18
	});
	const [label, setLabel] = (0, import_react.useState)("Eyes-open rest");
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let t0 = performance.now();
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const hist = CHANNELS.map(() => []);
		const draw = (now) => {
			const t = (now - t0) / 1e3;
			const w = canvas.width;
			const h = canvas.height;
			ctx.fillStyle = "#0c0d0b";
			ctx.fillRect(0, 0, w, h);
			const chH = h / CHANNELS.length;
			CHANNELS.forEach((_, i) => {
				const v = sample(t, i);
				const row = hist[i] ?? [];
				row.push(v);
				if (row.length > w) row.shift();
				hist[i] = row;
				const mid = chH * i + chH / 2;
				ctx.beginPath();
				ctx.strokeStyle = "#b7d9a3";
				ctx.globalAlpha = .9;
				ctx.lineWidth = 1.2;
				row.forEach((y, x) => {
					const px = x + (w - row.length);
					const py = mid - y * (chH * .38);
					if (x === 0) ctx.moveTo(px, py);
					else ctx.lineTo(px, py);
				});
				ctx.stroke();
				ctx.globalAlpha = 1;
				ctx.fillStyle = "#8d8b82";
				ctx.font = "11px IBM Plex Mono, monospace";
				ctx.fillText(CHANNELS[i] ?? "", 8, chH * i + 16);
				ctx.strokeStyle = "rgba(236,234,227,0.08)";
				ctx.beginPath();
				ctx.moveTo(0, chH * (i + 1));
				ctx.lineTo(w, chH * (i + 1));
				ctx.stroke();
			});
			const alpha = 40 + Math.sin(t * .35) * 8;
			const beta = 18 + Math.sin(t * .5 + 1) * 5;
			const theta = 16 + Math.sin(t * .2 + 2) * 4;
			if (Math.floor(t * 4) !== Math.floor((t - .016) * 4)) {
				setBands({
					alpha: Math.round(alpha),
					beta: Math.round(beta),
					theta: Math.round(theta)
				});
				setLabel(alpha > beta + 12 ? "Eyes-open rest" : "Light attention");
			}
			if (!reduce) raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(raf);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-lg bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 900,
				height: 360,
				className: "h-auto w-full outline outline-1 -outline-offset-1 outline-fg/10",
				"aria-label": "Live four-channel EEG traces"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-raised p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
						children: "State (cautious)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl leading-snug text-pretty",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Band power only. A consumer EEG cannot read thoughts. This decoder never claims intention or language."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-3 gap-2",
				children: [
					[
						"α",
						bands.alpha,
						"8–12 Hz"
					],
					[
						"β",
						bands.beta,
						"13–30 Hz"
					],
					[
						"θ",
						bands.theta,
						"4–7 Hz"
					]
				].map(([k, v, hz]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-surface p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-muted",
							children: hz
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl leading-none tabular-nums",
							children: v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-[11px] tracking-wide text-phosphor whitespace-nowrap",
							children: [k, " rel"]
						})
					]
				}, k))
			})]
		})]
	});
}
function BotExample({ kind }) {
	if (kind === "data-ink") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataInkExample, {});
	if (kind === "yusician") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YusicianExample, {});
	if (kind === "solid-vibe") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolidVibeExample, {});
	if (kind === "neuroscience") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuroscienceExample, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg bg-surface p-6 text-sm text-muted",
		children: "No live sample captured yet. Open the share link and run a task — then send the output and it will land here."
	});
}
function BotPage() {
	const { bot, lastScanAt } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid-paper min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetHeader, { lastScan: lastScanAt ? formatDeskDate(lastScanAt) : null }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-wide text-muted uppercase hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Fleet"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mt-6 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: bot.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] text-faint",
										children: formatDeskDate(bot.announcedAt)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] tracking-tight",
									children: bot.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
									children: bot.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: bot.shareUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Add to Grok Bot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), bot.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: bot.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Announcement", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PILOT_URL,
									target: "_blank",
									rel: "noreferrer me",
									children: ["Operator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex flex-wrap items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.18em] text-muted uppercase",
								children: "Working sample"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-3xl tracking-tight",
								children: bot.sampleCaption
							})] }), bot.task ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-sm text-right font-mono text-[11px] leading-relaxed text-faint",
								children: ["Task · ", bot.task]
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotExample, { kind: bot.exampleKind })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationFooter, { current: "fleet" })
		]
	});
}
//#endregion
export { BotPage as component };
