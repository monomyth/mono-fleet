import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as X_PROFILE } from "./catalog-D8pT5eOG.mjs";
import { a as PILOT_URL, i as PILOT, r as LINKEDIN_URL } from "./constellation-CK7A9zJF.mjs";
import { i as ArrowUpRight, r as MapPin } from "../_libs/lucide-react.mjs";
import { r as Route$1 } from "./router-CFGeKKKO.mjs";
import { i as FleetHeader, n as Button, o as formatDeskDate, r as ConstellationFooter, t as Badge } from "./badge-CidSujEf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NPZFMhLP.js
var import_jsx_runtime = require_jsx_runtime();
function BotCard({ bot, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/bots/$slug",
		params: { slug: bot.slug },
		className: "group flex flex-col overflow-hidden rounded-xl bg-surface p-2 hairline hairline-hover transition-[box-shadow,transform] duration-200 ease-out",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: featured ? "relative aspect-[16/9] overflow-hidden rounded-lg bg-raised sm:aspect-[16/8]" : "relative aspect-[16/10] overflow-hidden rounded-lg bg-raised",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bot.cover,
				alt: "",
				className: "h-full w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-bg/80 to-transparent p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: bot.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-fg/80",
					children: formatDeskDate(bot.announcedAt)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-3 pt-4 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-none tracking-tight",
						children: bot.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 text-muted transition-colors group-hover:text-fg" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted",
					children: bot.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-[11px] tracking-wide text-faint",
					children: bot.sampleCaption
				})
			]
		})]
	});
}
function OperatorCard({ live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "pilot-desk-heading",
		className: "overflow-hidden rounded-xl bg-paper text-paper-ink hairline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[minmax(0,220px)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/5] bg-raised lg:aspect-auto lg:min-h-[280px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PILOT.photo,
					alt: PILOT.name,
					className: "h-full w-full object-cover object-[center_20%]",
					onError: (e) => {
						e.currentTarget.src = PILOT.photoFallback;
					}
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col px-5 py-6 sm:px-7 sm:py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-paper-ink/55 uppercase",
								children: "Pilot desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-paper-ink/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PILOT_URL,
								target: "_blank",
								rel: "noreferrer me",
								className: "font-mono text-[11px] tracking-wide text-paper-ink/70 underline decoration-paper-ink/25 underline-offset-4 hover:text-paper-ink hover:decoration-paper-ink",
								children: "monomyth.grok.me"
							}),
							live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-paper-ink/70 uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-1.5 rounded-full bg-ink",
									"aria-hidden": true
								}), "Live"]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "pilot-desk-heading",
						className: "mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[0.92] tracking-tight",
						children: PILOT.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-paper-ink/70 sm:text-base",
						children: [
							PILOT.title,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-paper-ink/35",
								children: "·"
							}),
							PILOT.tenure
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "text-paper-ink/80 shadow-[0_0_0_1px_rgba(28,26,22,0.16)]",
							children: PILOT.availability
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "text-paper-ink/80 shadow-[0_0_0_1px_rgba(28,26,22,0.16)]",
							children: PILOT.focus
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-sm leading-relaxed text-paper-ink/80",
						children: PILOT.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-center gap-2 text-sm text-paper-ink/55",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0" }), PILOT.location]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-5 max-w-xl border-l border-paper-ink/20 pl-4 font-display text-lg leading-snug text-paper-ink/80 italic",
						children: PILOT.quote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "bg-paper-ink text-paper hover:bg-fg hover:text-accent-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PILOT_URL,
								target: "_blank",
								rel: "noreferrer me",
								children: ["Open resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							className: "text-paper-ink shadow-[0_0_0_1px_rgba(28,26,22,0.18)] hover:bg-paper-ink/10 hover:text-paper-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKEDIN_URL,
								target: "_blank",
								rel: "noreferrer",
								children: ["LinkedIn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})]
					})
				]
			})]
		})
	});
}
function Home() {
	const data = Route$1.useLoaderData();
	const featured = data.bots.filter((b) => b.featured);
	const rest = data.bots.filter((b) => !b.featured);
	const newest = data.bots[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid-paper min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetHeader, { lastScan: data.lastScanAt ? formatDeskDate(data.lastScanAt) : null }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "stagger-in max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-muted uppercase",
								children: "Grok Bot desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.9] tracking-tight",
								children: "The fleet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
								children: [
									"Every public Grok Bot Eugene has shipped, in one place — with a working sample of what it actually does. There is no official roster API, so the desk watches",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: X_PROFILE,
										className: "text-fg underline decoration-line underline-offset-4 hover:decoration-fg",
										children: "@monomyth"
									}),
									" ",
									"and the share pages themselves. The operator’s hire-me desk is next door at",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: PILOT_URL,
										target: "_blank",
										rel: "noreferrer me",
										className: "text-fg underline decoration-line underline-offset-4 hover:decoration-fg",
										children: "monomyth.grok.me"
									}),
									"."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4",
						children: [
							["Bots on desk", String(data.bots.length).padStart(2, "0")],
							["First share", formatDeskDate(data.bots[data.bots.length - 1]?.announcedAt)],
							["Latest", newest?.name ?? "—"],
							["Sister desk", "Hire me"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-surface/80 px-4 py-3 hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-wide text-muted uppercase",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl leading-none",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorCard, { live: data.sister.live })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight",
								children: "On the desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [data.bots.length, " templates"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 lg:grid-cols-2",
							children: [featured.map((bot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: i === 0 ? "lg:col-span-2" : "",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotCard, {
									bot,
									featured: i === 0
								})
							}, bot.id)), rest.map((bot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotCard, { bot }, bot.id))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight",
							children: "How it tracks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-prose text-sm leading-relaxed text-muted",
							children: [
								"xAI does not publish a list-my-bots endpoint. Scan pulls three public surfaces: posts from @monomyth that contain",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-fg/80",
									children: "x.ai/bot/"
								}),
								" share links, the community directory at grokbots.best, and each bot’s own share page for name and description. New templates land here automatically. Samples for brand-new bots wait until a real output exists."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-5 hairline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
									children: "Last pass"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-fg",
									children: data.lastScanNotes ?? "Catalog is seeded from the last two weeks of X announcements. Hit Scan timeline to refresh."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: X_PROFILE,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-muted hover:text-fg",
									children: ["Follow @monomyth", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationFooter, { current: "fleet" })
		]
	});
}
//#endregion
export { Home as component };
