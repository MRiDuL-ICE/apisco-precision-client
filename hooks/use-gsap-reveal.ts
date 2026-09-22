"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function useGsapReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduced) {
      gsap.set(nodes, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.72, ease: "power2.out", overwrite: true }
            );
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
      );
      nodes.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    });

    return () => ctx.revert();
  }, []);
}
