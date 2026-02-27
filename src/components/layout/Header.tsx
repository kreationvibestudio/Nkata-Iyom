"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignOutButton } from "@/components/member/SignOutButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/offerings", label: "What We Do" },
  { href: "/blog", label: "Blog" },
  { href: "/library", label: "Bookshelf" },
  { href: "/videos", label: "Video Library" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
] as const;

interface HeaderProps {
  signedIn?: boolean;
}

export function Header({ signedIn = false }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-200 bg-surface/95 backdrop-blur-sm">
      <div className="container-narrow flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-semibold text-brand-900 tracking-tight hover:text-primary-500 transition-colors"
        >
          <Image
            src="/logo.png"
            alt="Nkata Ndi Inyom Igbo (NNII) — Partnering for Development"
            width={56}
            height={56}
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0"
            priority
          />
          <span className="hidden sm:inline">Nkata ndi Inyom Igbo</span>
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
                    ? "text-primary-500 bg-primary-50"
                    : "text-brand-700 hover:text-primary-500 hover:bg-primary-50/50"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-primary-500 rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="ml-2 px-4 py-2 text-sm font-semibold text-primary-500 border border-primary-500 rounded-md hover:bg-primary-50/70 hover:text-primary-600 transition-colors"
          >
            Join Us Now
          </Link>
          <Link
            href="/member"
            className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-primary-500 rounded-md hover:bg-primary-600 transition-colors"
          >
            Member area
          </Link>
          {signedIn && <SignOutButton />}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-brand-700 hover:bg-brand-100"
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
        className={`md:hidden border-t border-brand-200 bg-surface overflow-y-auto max-h-[calc(100vh-4rem)] ${mobileOpen ? "block" : "hidden"}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-narrow py-4 flex flex-col gap-1 pb-6" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-md text-sm font-medium ${
                pathname === href ? "text-primary-500 bg-primary-50" : "text-brand-700 hover:bg-brand-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="my-2 border-t border-brand-200" aria-hidden />
          <Link
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="mx-4 px-4 py-3 text-center text-sm font-semibold text-primary-500 border border-primary-500 rounded-md"
          >
            Join Us Now
          </Link>
          <Link
            href="/member"
            onClick={() => setMobileOpen(false)}
            className="mx-4 mt-2 px-4 py-3 text-center text-sm font-semibold text-white bg-primary-500 rounded-md"
          >
            Member area
          </Link>
          {signedIn && (
            <div className="mt-2 mx-4 px-4 py-3 border border-brand-200 rounded-md bg-brand-50/50">
              <SignOutButton />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
