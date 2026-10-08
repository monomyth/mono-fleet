import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import { PILOT_URL, SLOP_URL } from "@/lib/constellation";
import appCss from "../styles.css?url";

const APP_NAME = "FLEET";
const APP_DESC =
  "Grok Bots by @monomyth — a living desk of agents, samples, and share links. Sister desks: monomyth.grok.me and jon-slop.grok.me.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESC },
      { name: "theme-color", content: "#0b0c0b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "me", href: PILOT_URL },
      { rel: "alternate", href: PILOT_URL, title: "Hire me — Eugene Ray" },
      { rel: "me", href: SLOP_URL },
      { rel: "alternate", href: SLOP_URL, title: "Jon Slop — Slop Cannon catalog" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster
            theme="dark"
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#141513",
                color: "#eceae3",
                border: "1px solid #2a2b27",
                fontFamily: "IBM Plex Sans, sans-serif",
              },
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
