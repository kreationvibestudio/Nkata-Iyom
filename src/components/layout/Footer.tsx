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
    <footer className="border-t border-brand-200/60 bg-brand-50/50">
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
                className="text-sm text-brand-700 hover:text-accent-600 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link href="/member" className="text-sm font-medium text-accent-600 hover:text-accent-700">
              Member area
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-brand-600">
            © {currentYear} Nkata ndi Inyom Igbo. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-600">
            <Link href="/privacy" className="hover:text-accent-600 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-accent-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
