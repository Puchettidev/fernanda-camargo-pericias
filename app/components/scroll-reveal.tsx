"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "main > .section:not(.hero), main > .inline-cta, main > section > .section, .site-footer";

/**
 * Fade/slide leve ao rolar. Sem JavaScript ou com prefers-reduced-motion,
 * todo o conteúdo aparece normalmente (a classe só é aplicada aqui).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const viewportBottom = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    for (const element of elements) {
      // O que já está na tela não anima, para não piscar.
      if (element.getBoundingClientRect().top < viewportBottom) continue;
      element.classList.add("reveal");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
