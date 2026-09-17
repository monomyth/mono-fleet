import { createServerFn } from "@tanstack/react-start";
import { PILOT_URL } from "./constellation";

export type SisterDeskStatus = {
  url: string;
  live: boolean;
};

export const pingSisterDesk = createServerFn({ method: "GET" }).handler(
  async (): Promise<SisterDeskStatus> => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    try {
      const res = await fetch(PILOT_URL, {
        method: "GET",
        signal: ctrl.signal,
        headers: {
          "User-Agent": "FLEET-constellation/1.0",
          Accept: "text/html",
        },
      });
      return { url: PILOT_URL, live: res.ok };
    } catch {
      return { url: PILOT_URL, live: false };
    } finally {
      clearTimeout(t);
    }
  },
);
