import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as X_PROFILE } from "./catalog-D8pT5eOG.mjs";
import { a as PILOT_URL, n as FLEET_URL, t as DESKS } from "./constellation-CK7A9zJF.mjs";
import { i as ArrowUpRight, n as RefreshCw } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as scanFleet } from "./router-CFGeKKKO.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CidSujEf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDeskDate(iso) {
	if (!iso) return "—";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "—";
	return d.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "America/Los_Angeles"
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,box-shadow,background-color,color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-[0_0_0_1px_rgba(216,221,212,0.2)] hover:bg-fg",
			ghost: "bg-transparent text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.12)] hover:shadow-[0_0_0_1px_rgba(236,234,227,0.22)] hover:bg-raised",
			quiet: "bg-transparent text-muted hover:text-fg"
		},
		size: {
			md: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-xs tracking-wide",
			lg: "h-12 rounded-lg px-5 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function ScanButton() {
	const router = useRouter();
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		disabled: busy,
		onClick: async () => {
			setBusy(true);
			try {
				const result = await scanFleet();
				toast(result.notes);
				await router.invalidate();
			} catch {
				toast("Scan failed. The seeded catalog is still here.");
			} finally {
				setBusy(false);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: busy ? "animate-spin" : "" }), busy ? "Scanning X" : "Scan timeline"]
	});
}
function DeskSwitcher({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Linked desks",
		className: "flex h-9 items-center rounded-sm p-0.5 hairline",
		children: DESKS.map((desk) => {
			const active = desk.id === current;
			const className = cn("inline-flex h-8 items-center gap-1 rounded-xs px-2.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors", active ? "bg-raised text-fg" : "text-muted hover:text-fg", !desk.external && "hidden sm:inline-flex");
			if (desk.external) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: desk.href,
				target: "_blank",
				rel: "noreferrer me",
				className,
				children: [desk.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
			}, desk.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-current": active ? "page" : void 0,
				className,
				children: desk.name
			}, desk.id);
		})
	});
}
function FleetHeader({ lastScan }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl leading-none tracking-tight",
						children: "FLEET"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-mono text-[11px] tracking-[0.18em] text-muted uppercase sm:inline",
						children: "Desk / @monomyth"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskSwitcher, { current: "fleet" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-3",
				children: [lastScan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden font-mono text-[11px] text-faint lg:block",
					children: ["last scan ", lastScan]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanButton, {})]
			})]
		})
	});
}
function ConstellationFooter({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-muted uppercase",
						children: "Constellation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md font-display text-2xl leading-tight tracking-tight",
						children: "Two desks, one operator."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-muted",
						children: [
							"FLEET is the bot desk.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PILOT_URL,
								target: "_blank",
								rel: "noreferrer me",
								className: "text-fg underline decoration-line underline-offset-4 hover:decoration-fg",
								children: "monomyth.grok.me"
							}),
							" ",
							"is the hire-me desk. Same person, linked."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: DESKS.map((desk) => {
						const here = desk.id === current;
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl leading-none",
									children: desk.name
								}), desk.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-wider text-faint uppercase",
									children: "you are here"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-[11px] tracking-wide text-muted uppercase",
								children: desk.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: desk.blurb
							})
						] });
						const className = cn("rounded-lg bg-surface px-4 py-4 text-left hairline", here && "shadow-[0_0_0_1px_rgba(236,234,227,0.18)]");
						if (desk.external) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: desk.href,
							target: "_blank",
							rel: "noreferrer me",
							className: cn(className, "transition-colors hover:bg-raised"),
							children: inner
						}, desk.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className,
							"aria-current": "page",
							children: inner
						}, desk.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-[11px] font-mono tracking-wide text-faint uppercase lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "@monomyth" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: FLEET_URL,
							className: "hover:text-muted",
							children: FLEET_URL.replace("https://", "")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PILOT_URL,
							target: "_blank",
							rel: "noreferrer me",
							className: "hover:text-muted",
							children: PILOT_URL.replace("https://", "")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: X_PROFILE,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-muted",
							children: "X"
						})
					]
				})
			]
		})
	});
}
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-sm px-2 font-mono text-[11px] tracking-wider text-muted uppercase", "shadow-[0_0_0_1px_rgba(236,234,227,0.1)]", className),
		children
	});
}
//#endregion
export { cn as a, FleetHeader as i, Button as n, formatDeskDate as o, ConstellationFooter as r, Badge as t };
