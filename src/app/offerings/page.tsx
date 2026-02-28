import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata = {
  title: "What We Do",
  description:
    "Explore Nkata Ndi Inyom Igbo's programmes: Annual Conferences, Nkata Webinar Series, Advocacy, and Outreaches.",
};

const programmes = [
  {
    title: "Annual Conferences",
    href: "/offerings/annual-conferences",
    excerpt:
      "A yearly gathering of progressive individuals who believe in the value of conversations and dialogue for the unity and development of Alaigbo and Nigeria. A platform for women to elevate their voices and break barriers.",
  },
  {
    title: "Nkata Webinar Series",
    href: "/offerings/webinar-series",
    excerpt:
      "An interactive programme that drives and deepens conversations on critical issues affecting women, girls, and society — harnessing the power of meaningful dialogue for positive change.",
  },
  {
    title: "Advocacy",
    href: "/offerings/advocacy",
    excerpt:
      "Strategic commitment to justice, inclusive leadership, and sustainable transformation in the South East. We amplify voices of women and youth and engage policymakers and partners for measurable impact.",
  },
  {
    title: "Outreaches",
    href: "/offerings/outreaches",
    excerpt:
      "Where vision meets people. We engage communities directly through capacity-building, skills development, health awareness, and community empowerment — practical, inclusive, and impact-driven.",
  },
];

export default function OfferingsPage() {
  return (
    <>
      <PageBanner
        variant="offerings"
        title="What We Do"
        description="Programmes and initiatives that empower women and preserve Igbo culture."
      />

      <Section variant="muted">
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-brand-700 leading-relaxed text-lg">
            Nkata Ndi Inyom Igbo runs a range of programmes aimed at dialogue, empowerment, advocacy, and community engagement. Explore each area below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <h2 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h2>
              <p className="mt-3 text-brand-700 leading-relaxed text-sm">
                {item.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="primary-subtle">
        <div className="text-center">
          <p className="text-brand-700 mb-6">Want to get involved?</p>
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
