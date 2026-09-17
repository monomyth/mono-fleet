import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://video.twimg.com/amplify_video/2100352658481790976/vid/avc1/1280x720/HH74U2qLdD74-qx7.mp4";

export function YusicianExample() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
      const bw = (w - (bars + 1) * gap) / bars;
      for (let i = 0; i < bars; i++) {
        const n =
          0.22 +
          0.55 * Math.abs(Math.sin(i * 0.17 + t * 1.4)) +
          0.25 * Math.abs(Math.sin(i * 0.41 + t * 2.7)) +
          0.12 * Math.abs(Math.sin(i * 0.09 + t * 0.6));
        const bh = Math.max(4, n * (h * 0.78));
        ctx.fillStyle = i % 11 === 0 ? "#eceae3" : "#8d8b82";
        ctx.globalAlpha = 0.55 + n * 0.45;
        ctx.fillRect(gap + i * (bw + gap), (h - bh) / 2, bw, bh);
      }
      ctx.globalAlpha = 1;
      if (!reduce) {
        t += 0.035;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-lg bg-surface">
        <video
          className="aspect-video w-full bg-bg object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          controls
          playsInline
          poster="/samples/yusician-cover.jpg"
          src={VIDEO_SRC}
        >
          Your browser cannot play this sample.
        </video>
        <p className="px-4 py-3 font-mono text-[11px] tracking-wide text-muted">
          Posted sample · YuE2 on Apple Silicon · 48 kHz WAV · CC BY-NC 4.0
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <canvas
          ref={canvasRef}
          width={640}
          height={180}
          className="h-32 w-full rounded-md bg-bg outline outline-1 -outline-offset-1 outline-fg/10"
          aria-hidden
        />
        <div className="rounded-md bg-raised p-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Prompt in
          </p>
          <p className="mt-2 font-display text-xl leading-snug text-fg italic">
            Industrial electronic. Dry kick. Analog stab. No vocal. Warehouse at
            2 a.m.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            File out
          </p>
          <p className="mt-1 font-mono text-sm text-fg">track.wav · 48 kHz · non-commercial</p>
        </div>
      </div>
    </div>
  );
}
