"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="topbar" data-testid="site-header">
        <div className="container topbar-inner">
          <a
            className="brand"
            href="/"
            data-testid="link-brand"
            onClick={closeDrawer}
          >
            <Image
              src="/logo.png"
              alt="Apisco Precision"
              width={180}
              height={70}
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link${isActive ? " active" : ""}`}
                  data-testid={`link-nav-${href.replace("/", "")}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            className="menu-trigger"
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
            aria-expanded={drawerOpen}
            data-testid="button-open-navigation"
          >
            <Menu size={40} strokeWidth={2.3} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`drawer-overlay${drawerOpen ? " open" : ""}`}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      >
        <aside
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          <button
            className="drawer-close"
            type="button"
            onClick={closeDrawer}
            aria-label="Close navigation"
            data-testid="button-close-navigation"
          >
            <X size={40} strokeWidth={2.6} />
          </button>

          <nav className="drawer-nav">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`drawer-link${isActive ? " active" : ""}`}
                  onClick={closeDrawer}
                  data-testid={`link-drawer-${href.replace("/", "")}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}
