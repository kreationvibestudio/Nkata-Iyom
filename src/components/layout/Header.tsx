"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/offerings", label: "Offerings" },
  { href: "/blog", label: "Blog" },
  { href: "/library", label: "Bookshelf" },
  { href: "/videos", label: "Video Library" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-200/60 bg-surface/95 backdrop-blur-sm">
      <div className="container-narrow flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-brand-900 tracking-tight hover:text-brand-700 transition-colors"
        >
          Nkata ndi Inyom Igbo
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-accent-600 bg-accent-50"
                    : "text-brand-700 hover:text-accent-600 hover:bg-brand-50"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-accent-500 rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/member"
            className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-accent-600 rounded-md hover:bg-accent-700 transition-colors"
          >
            Member area
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-brand-700 hover:bg-brand-100 aria-expanded={mobileOpen}"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-brand-200/60 bg-surface ${mobileOpen ? "block" : "hidden"}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-narrow py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-md text-sm font-medium ${
                pathname === href ? "text-accent-600 bg-accent-50" : "text-brand-700 hover:bg-brand-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/member"
            onClick={() => setMobileOpen(false)}
            className="mx-4 mt-2 px-4 py-3 text-center text-sm font-semibold text-white bg-accent-600 rounded-md"
          >
            Member area
          </Link>
        </nav>
      </div>
    </header>
  );
}
