"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono">Apisco Precision — Dhaka, Bangladesh</span>
        <button
          className="back-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="button-back-to-top"
        >
          Back to top <ArrowUp size={13} strokeWidth={1.6} />
        </button>
        <span className="mono">© {new Date().getFullYear()} Apisco Precision</span>
      </div>
    </footer>
  );
}
