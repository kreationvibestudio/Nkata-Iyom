import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/board", label: "Board of Trustees" },
  { href: "/management", label: "Management Team" },
  { href: "/offerings", label: "What We Do" },
  { href: "/blog", label: "Blog" },
  { href: "/library", label: "Bookshelf" },
  { href: "/videos", label: "Video Library" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
  { href: "/donate", label: "Donate" },
] as const;

interface FooterProps {
  showMemberLink?: boolean;
}

export function Footer({ showMemberLink = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-200 bg-primary-50/50 pb-[env(safe-area-inset-bottom)]">
      <div className="container-narrow section-padding">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold text-brand-900 hover:text-brand-700 transition-colors"
            >
              Nkata Ndi Inyom Igbo
            </Link>
            <p className="mt-2 text-sm text-brand-700 max-w-md">
              Partnering for Development
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-brand-700 hover:text-primary-500 transition-colors"
              >
                {label}
              </Link>
            ))}
            {showMemberLink && (
              <Link href="/member" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                Member area
              </Link>
            )}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-200/60">
          <p className="text-sm font-semibold text-brand-900 mb-3">NKATA SOCIAL MEDIA HANDLES</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-700">
            <li>
              <a
                href="https://x.com/nkatandiinyom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="X (Twitter) @nkatandiinyom"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @nkatandiinyom
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/official_nkatandiinyom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram @official_nkatandiinyom"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                @official_nkatandiinyom
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CMbozSeUH/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook Nkata Ndi Inyom Igbo"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Nkata Ndi Inyom Igbo
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-6 border-t border-brand-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-brand-600">
            © {currentYear} Nkata Ndi Inyom Igbo. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-600">
            <Link href="/privacy" className="hover:text-primary-500 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-primary-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
