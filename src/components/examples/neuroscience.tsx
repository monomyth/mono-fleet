import { useEffect, useRef, useState } from "react";

const CHANNELS = ["C3", "C4", "Cz", "Pz"] as const;

function sample(t: number, ch: number) {
  const alpha = Math.sin(2 * Math.PI * 10 * t + ch) * 0.45;
  const beta = Math.sin(2 * Math.PI * 22 * t + ch * 0.7) * 0.18;
  const theta = Math.sin(2 * Math.PI * 6 * t + ch * 1.3) * 0.22;
  const noise = (Math.sin(t * 47 + ch * 13) + Math.sin(t * 91 + ch)) * 0.05;
  return alpha + beta + theta + noise;
}

export function NeuroscienceExample() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bands, setBands] = useState({ alpha: 42, beta: 21, theta: 18 });
  const [label, setLabel] = useState("Eyes-open rest");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t0 = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hist: number[][] = CHANNELS.map(() => []);

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
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
        ctx.globalAlpha = 0.9;
        ctx.lineWidth = 1.2;
        row.forEach((y, x) => {
          const px = x + (w - row.length);
          const py = mid - y * (chH * 0.38);
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

      const alpha = 40 + Math.sin(t * 0.35) * 8;
      const beta = 18 + Math.sin(t * 0.5 + 1) * 5;
      const theta = 16 + Math.sin(t * 0.2 + 2) * 4;
      if (Math.floor(t * 4) !== Math.floor((t - 0.016) * 4)) {
        setBands({
          alpha: Math.round(alpha),
          beta: Math.round(beta),
          theta: Math.round(theta),
        });
        setLabel(alpha > beta + 12 ? "Eyes-open rest" : "Light attention");
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="overflow-hidden rounded-lg bg-bg">
        <canvas
          ref={canvasRef}
          width={900}
          height={360}
          className="h-auto w-full outline outline-1 -outline-offset-1 outline-fg/10"
          aria-label="Live four-channel EEG traces"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="rounded-md bg-raised p-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            State (cautious)
          </p>
          <p className="mt-2 font-display text-2xl leading-snug text-pretty">{label}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Band power only. A consumer EEG cannot read thoughts. This decoder
            never claims intention or language.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-2">
          {(
            [
              ["α", bands.alpha, "8–12 Hz"],
              ["β", bands.beta, "13–30 Hz"],
              ["θ", bands.theta, "4–7 Hz"],
            ] as const
          ).map(([k, v, hz]) => (
            <li key={k} className="rounded-md bg-surface p-3">
              <p className="font-mono text-[11px] text-muted">{hz}</p>
              <p className="mt-1 font-display text-2xl leading-none tabular-nums">
                {v}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-phosphor whitespace-nowrap">
                {k} rel
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
