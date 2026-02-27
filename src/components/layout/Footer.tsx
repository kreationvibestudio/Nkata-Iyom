import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/offerings", label: "Offerings" },
  { href: "/blog", label: "Blog" },
  { href: "/library", label: "Bookshelf" },
  { href: "/videos", label: "Video Library" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-200 bg-primary-50/50">
      <div className="container-narrow section-padding">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold text-brand-900 hover:text-brand-700 transition-colors"
            >
              Nkata ndi Inyom Igbo
            </Link>
            <p className="mt-2 text-sm text-brand-700 max-w-md">
              Empowering Igbo women together. Preserving our culture while fostering women’s leadership in our communities.
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
            <Link href="/member" className="text-sm font-medium text-primary-500 hover:text-primary-600">
              Member area
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-200/60">
          <p className="text-sm font-semibold text-brand-900 mb-3">NKATA SOCIAL MEDIA HANDLES</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-brand-700">
            <li>
              <span className="text-brand-600">X:</span>{" "}
              <a
                href="https://x.com/nkatandiinyom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
              >
                @nkatandiinyom
              </a>
            </li>
            <li>
              <span className="text-brand-600">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/official_nkatandiinyom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
              >
                @official_nkatandiinyom
              </a>
            </li>
            <li>
              <span className="text-brand-600">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/share/1CMbozSeUH/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
              >
                Nkata Ndi Inyom Igbo
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-6 border-t border-brand-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-brand-600">
            © {currentYear} Nkata ndi Inyom Igbo. All rights reserved.
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
