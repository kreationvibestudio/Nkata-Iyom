import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Our Offerings",
  description:
    "Explore Nkata ndi Inyom Igbo’s programs: community leadership, cultural heritage, workshops, and mentorship.",
};

const offerings = [
  {
    title: "Community Leadership",
    description:
      "Programs and mentorship that empower women to step into leadership roles, creating a ripple effect that uplifts entire communities.",
    href: "/offerings#community",
  },
  {
    title: "Cultural Heritage",
    description:
      "Workshops, events, and resources that preserve and celebrate Igbo traditions, ensuring they thrive for future generations.",
    href: "/offerings#heritage",
  },
  {
    title: "Conflict Resolution & Mediation",
    description:
      "Council-led mediation services that use wisdom and experience to resolve disputes and strengthen community bonds.",
    href: "/offerings#mediation",
  },
];

export default function OfferingsPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Our Offerings
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Programs and initiatives that empower women and preserve Igbo culture.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-12">
          {offerings.map((item, i) => (
            <article
              key={item.title}
              id={item.href.split("#")[1]}
              className="flex flex-col sm:flex-row gap-8 items-start p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-brand-300/60 transition-colors"
            >
              <div className="flex-1">
                <h2 className="font-display text-display-sm text-brand-900">{item.title}</h2>
                <p className="mt-3 text-brand-700 leading-relaxed">{item.description}</p>
                <ButtonLink href={item.href} variant="ghost" size="sm" className="mt-4">
                  Learn more
                </ButtonLink>
              </div>
              <div className="w-full sm:w-48 h-32 rounded-lg bg-brand-100/50 flex items-center justify-center text-brand-600 text-sm shrink-0">
                [Image]
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="text-center">
          <p className="text-brand-700 mb-6">Want to get involved?</p>
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
