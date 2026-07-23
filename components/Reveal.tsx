"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Fade + leve translateY ao entrar na viewport, uma única vez.
 *
 * `data-hidden` só é setado aqui, no cliente, via useLayoutEffect (antes do
 * primeiro paint, sem flash) — nunca no HTML vindo do servidor. Se o script
 * falhar, o elemento nunca ganha o atributo e permanece visível. Ver a regra
 * `.reveal` em app/globals.css, que também desliga tudo sob
 * prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ref.current?.setAttribute("data-hidden", "true");
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.removeAttribute("data-hidden");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
