import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Nkata ndi Inyom Igbo — our story, mission, and commitment to empowering Igbo women and preserving culture.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            About Nkata ndi Inyom Igbo
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Our story, our mission, and our commitment to empowering Igbo women and preserving culture for future generations.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl prose prose-brand">
          <p className="text-brand-700 leading-relaxed text-lg">
            With decades of commitment, Nkata ndi Inyom Igbo has cultivated a strong presence within the community where influential women come together. Our vast experience in counsel and cultural preservation is unmatched, as we uplift generations through our programs.
          </p>
          <p className="mt-6 text-brand-700 leading-relaxed">
            We advocate for gender equality and women’s rights, ensuring their voices resonate in local leadership. Through workshops, mentorship, and community events, we safeguard Igbo traditions and stories so they are passed on to future generations.
          </p>
          <p className="mt-6 text-brand-700 leading-relaxed">
            Our council offers mediation services, using wisdom and experience to resolve disputes harmoniously and strengthen community bonds. We are dedicated to building a community of leaders guided by mutual respect and shared purpose.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-display-sm text-brand-900">Our Mission</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              To empower Igbo women through cultural preservation, leadership development, and community support, ensuring their voices and wisdom shape the future of our communities.
            </p>
          </div>
          <div>
            <h2 className="font-display text-display-sm text-brand-900">Our Vision</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              A world where Igbo women lead with confidence, culture thrives across generations, and communities are strengthened by the collective wisdom of women.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <p className="text-brand-700 mb-6">Ready to join or learn more?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href="/offerings" variant="outline">Our Offerings</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
