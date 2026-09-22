"use client";

import { useEffect } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function GsapRevealInit() {
  useGsapReveal();

  useEffect(() => {
    document.documentElement.classList.add("is-ready");
    return () => document.documentElement.classList.remove("is-ready");
  }, []);

  return null;
}
