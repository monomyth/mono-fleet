import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const VIDEO_SRC = "/samples/yusician-result.mp4";
const POSTER = "/samples/yusician-cover.jpg";

function fmt(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function YusicianExample() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const [clock, setClock] = useState("0:00 / 1:30");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => {
      setPlaying(!video.paused && !video.ended);
      setClock(`${fmt(video.currentTime)} / ${fmt(video.duration || 90)}`);
    };
    const events = ["play", "pause", "ended", "timeupdate", "loadedmetadata"] as const;
    events.forEach((e) => video.addEventListener(e, sync));
    sync();
    return () => events.forEach((e) => video.removeEventListener(e, sync));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let audioCtx: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let bins: Uint8Array<ArrayBuffer> | null = null;
    let raf = 0;
    let idle = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const arm = () => {
      if (audioCtx) return;
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AC();
      const src = audioCtx.createMediaElementSource(video);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.72;
      bins = new Uint8Array(analyser.frequencyBinCount);
      src.connect(analyser);
      analyser.connect(audioCtx.destination);
    };

    const onPlay = () => {
      arm();
      void audioCtx?.resume();
    };
    video.addEventListener("play", onPlay);

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.fillStyle = "#0c0d0b";
      ctx.fillRect(0, 0, w, h);
      const bars = 72;
      const gap = 2;
      const bw = (w - (bars + 1) * gap) / bars;
      const live = analyser && bins && !video.paused && !video.ended;
      if (live && analyser && bins) {
        analyser.getByteFrequencyData(bins);
      }
      for (let i = 0; i < bars; i++) {
        let n: number;
        if (live && bins) {
          const idx = Math.min(bins.length - 1, Math.floor(i * (bins.length / bars)));
          n = (bins[idx] ?? 0) / 255;
        } else {
          n =
            0.18 +
            0.35 * Math.abs(Math.sin(i * 0.17 + idle * 1.1)) +
            0.18 * Math.abs(Math.sin(i * 0.41 + idle * 2.2));
        }
        const bh = Math.max(4, n * (h * 0.82));
        ctx.fillStyle = i % 11 === 0 ? "#eceae3" : "#8d8b82";
        ctx.globalAlpha = 0.5 + n * 0.5;
        ctx.fillRect(gap + i * (bw + gap), (h - bh) / 2, bw, bh);
      }
      ctx.globalAlpha = 1;
      if (!reduce) {
        idle += video.paused ? 0.02 : 0.045;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("play", onPlay);
      void audioCtx?.close();
    };
  }, []);

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) await video.play();
    else video.pause();
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-lg bg-surface">
        <div className="relative bg-bg">
          <video
            ref={videoRef}
            className="aspect-video w-full bg-bg object-cover outline outline-1 -outline-offset-1 outline-fg/10"
            controls
            playsInline
            preload="metadata"
            poster={POSTER}
            src={VIDEO_SRC}
          >
            Your browser cannot play this sample.
          </video>
          {!playing ? (
            <button
              type="button"
              onClick={() => void toggle()}
              className="absolute top-1/2 left-1/2 z-10 flex min-h-14 min-w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-accent-fg shadow-[0_0_0_1px_rgba(236,234,227,0.2)]"
              aria-label="Play Yusician sample"
            >
              <Play className="size-6 translate-x-0.5" fill="currentColor" />
            </button>
          ) : null}
        </div>
        <p className="px-4 py-3 font-mono text-[11px] tracking-wide text-muted">
          Posted sample · YuE2 on Apple Silicon · 1:30 · 48 kHz · CC BY-NC 4.0
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
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => void toggle()}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-fg text-accent-fg"
              aria-label={playing ? "Pause sample" : "Play sample"}
            >
              {playing ? <Pause className="size-4" fill="currentColor" /> : <Play className="size-4 translate-x-px" fill="currentColor" />}
            </button>
            <p className="font-mono text-xs tracking-wide text-muted tabular-nums">{clock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
