import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  accent: string;
  alt: string;
};

export default function LaptopShowcase({ images, accent, alt }: Props) {
  const [idx, setIdx] = useState(0);
  const n = images.length;
  const go = (d: number) => setIdx((i) => (i + d + n) % n);

  return (
    <div
      className="w-full max-w-[560px] rounded-[2rem] border-[3px] border-ink p-4 sm:p-5"
      style={{
        background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 18%, white) 0%, var(--card) 100%)`,
        boxShadow: "6px 6px 0 0 var(--ink)",
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">Desktop Preview</p>
          <p className="font-display text-xl leading-none">Web experience</p>
        </div>
        <div
          className="rounded-full border-2 border-ink px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em]"
          style={{ background: "var(--background)" }}
        >
          {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute -top-3 right-3 h-5 w-24 rounded-full border-2 border-ink"
          style={{ background: accent, boxShadow: "3px 3px 0 0 var(--ink)" }}
        />

        <div
          className="relative rounded-[1.5rem] border-[3px] border-ink p-3"
          style={{
            background: "var(--ink)",
            boxShadow: "6px 6px 0 0 var(--ink)",
          }}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.9rem] border-2 border-ink bg-background">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${alt} desktop screen ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                  i === idx ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

            {n > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous desktop screen"
                  className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-background/95 transition hover:scale-110"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next desktop screen"
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-background/95 transition hover:scale-110"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            )}

            <div className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-ink bg-background/80" />
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink px-3 py-1 text-[9px] font-mono uppercase tracking-[0.18em]"
              style={{ background: "var(--background)" }}
            >
              Browser walkthrough
            </div>
          </div>
        </div>

        <div
          className="mx-auto h-3 w-[18%] rounded-b-xl border-x-[3px] border-b-[3px] border-ink"
          style={{ background: accent }}
        />
        <div
          className="mx-auto h-4 w-[75%] rounded-b-[1.2rem] border-[3px] border-t-0 border-ink"
          style={{ background: "var(--card)" }}
        />
      </div>

      {n > 1 && (
        <div className="mt-4 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-3">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Desktop screen ${i + 1}`}
                className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-[0.9rem] border-2 border-ink transition-all ${
                  i === idx ? "-translate-y-0.5 shadow-[3px_3px_0_0_var(--ink)]" : "opacity-75 hover:opacity-100"
                }`}
                style={{ background: i === idx ? accent : "var(--background)" }}
              >
                <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-black/45 py-1 text-center text-[9px] font-mono uppercase tracking-[0.18em] text-white">
                  Screen {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
