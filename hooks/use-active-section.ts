"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export function useActiveSection(defaultId = "home") {
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.25, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
