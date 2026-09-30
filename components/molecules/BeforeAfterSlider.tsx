"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 5));
    } else if (event.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 5));
    } else if (event.key === "Home") {
      setPosition(0);
    } else if (event.key === "End") {
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-2xl md:aspect-[4/3] ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      onPointerCancel={stopDragging}
    >
      {/* After image (full, base layer) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          draggable={false}
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-brand-forest px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md md:text-xs">
          {afterLabel}
        </span>
      </div>

      {/* Before image (clipped by slider position via clip-path, avoids layout hacks) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          draggable={false}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md md:text-xs">
          {beforeLabel}
        </span>
      </div>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label="Vorher-Nachher-Regler"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white/40 transition-transform group-active:scale-95 focus-visible:outline-none focus-visible:ring-brand-pink"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M8 6L2 12L8 18M16 6L22 12L16 18"
              stroke="#1E7A54"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
