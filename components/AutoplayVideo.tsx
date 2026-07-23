"use client";

import { useEffect, useRef } from "react";

/**
 * Autoplay/muted/loop, mas pausado quando o visitante pede
 * prefers-reduced-motion — relevante dado o público 60+.
 *
 * `eager` (Hero, sempre visível ao carregar): autoplay nativo via atributo
 * HTML, sem depender de JS. Os demais vídeos (abaixo da dobra, em Serviços)
 * só começam a baixar/tocar quando entram perto da viewport — sem isso, os
 * 4 vídeos da página baixavam ~10MB juntos logo no carregamento, derrubando
 * o LCP (medido em 4.4s via Lighthouse antes desta correção).
 */
export default function AutoplayVideo({
  webm,
  mp4,
  poster,
  ariaLabel,
  eager = false,
  className = "",
}: {
  webm: string;
  mp4: string;
  poster: string;
  ariaLabel?: string;
  eager?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (eager) {
      if (reduceMotion) {
        node.pause();
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.preload = "auto";
          node.load();
          if (!reduceMotion) {
            node.play().catch(() => {});
          }
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <video
      ref={videoRef}
      autoPlay={eager}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      poster={poster}
      aria-label={ariaLabel}
      className={`h-full w-full object-cover ${className}`}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
