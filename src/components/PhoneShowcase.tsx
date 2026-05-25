import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  accent: string;
  alt: string;
};

export default function PhoneShowcase({ images, accent, alt }: Props) {
  const [idx, setIdx] = useState(0);
  const n = images.length;
  const go = (d: number) => setIdx((i) => (i + d + n) % n);

  return (
    <div
      className="mx-auto w-full max-w-[22rem] sm:max-w-[320px] rounded-[2rem] border-[3px] border-ink p-3 sm:p-5"
      style={{
        background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 18%, white) 0%, var(--card) 100%)`,
        boxShadow: "6px 6px 0 0 var(--ink)",
      }}
    >
      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">Mobile Preview</p>
          <p className="font-display text-xl leading-none">Live screens</p>
        </div>
        <div
          className="rounded-full border-2 border-ink px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em]"
          style={{ background: "var(--background)" }}
        >
          {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>
      </div>

      <div className="relative mx-auto flex w-full justify-center pb-5 sm:pb-6">
        <div
          className="absolute -top-3 -right-2 size-14 rounded-full border-2 border-ink"
          style={{ background: accent, boxShadow: "3px 3px 0 0 var(--ink)" }}
        />
        <div
          className="absolute -bottom-1 -left-2 size-7 rotate-12 border-2 border-ink"
          style={{ background: "var(--sun)", boxShadow: "2px 2px 0 0 var(--ink)" }}
        />

        <div
          className="relative w-[216px] sm:w-[230px] aspect-[9/19] rounded-[2.2rem] border-[3px] border-ink p-2.5"
          style={{
            background: "var(--ink)",
            boxShadow: "6px 6px 0 0 var(--ink)",
            transform: "rotate(-1.5deg)",
          }}
        >
          <div className="absolute left-1/2 top-2 z-20 flex h-4 w-20 -translate-x-1/2 items-center justify-center gap-1 rounded-b-xl border-2 border-ink bg-background">
            <span className="size-1.5 rounded-full bg-ink" />
            <span className="size-1 rounded-full bg-ink opacity-50" />
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border-2 border-ink bg-background">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${alt} screen ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                  i === idx ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/18 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

            {n > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous screen"
                  className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-background/95 transition hover:scale-110"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next screen"
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-background/95 transition hover:scale-110"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            )}

          </div>

          <div className="absolute bottom-1.5 left-1/2 z-20 h-1 w-12 -translate-x-1/2 rounded-full bg-background/30" />
        </div>
      </div>

      {n > 1 && (
        <div className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex min-w-max snap-x snap-mandatory gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Screen ${i + 1}`}
                className={`relative h-20 w-12 shrink-0 snap-start overflow-hidden rounded-[0.9rem] border-2 border-ink transition-all ${
                  i === idx ? "-translate-y-0.5 shadow-[3px_3px_0_0_var(--ink)]" : "opacity-75 hover:opacity-100"
                }`}
                style={{ background: i === idx ? accent : "var(--background)" }}
              >
                <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-black/40 py-1 text-center text-[9px] font-mono uppercase tracking-[0.18em] text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
