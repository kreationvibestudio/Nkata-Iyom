import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-gradient-to-b from-brand-50 to-surface overflow-hidden">
        <div className="container-narrow section-padding relative z-10">
          <p className="text-sm font-medium text-accent-600 uppercase tracking-wider mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
            Nkata ndi Inyom Igbo
          </p>
          <h1 className="font-display text-display-xl sm:text-5xl md:text-display-xl text-brand-900 heading-balance max-w-3xl opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:60ms]">
            Empowering Igbo Women Together
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-700 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:180ms]">
            Preserving our culture while fostering women’s leadership in Igbo communities through shared wisdom and strength.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:280ms]">
            <ButtonLink href="/contact" size="lg">
              Join Us Now
            </ButtonLink>
            <ButtonLink href="/about" variant="outline" size="lg">
              Learn More
            </ButtonLink>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-brand-200)_0%,transparent_50%)] pointer-events-none" aria-hidden />
      </section>

      {/* Features / Initiatives */}
      <Section variant="muted" id="initiatives">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
            Empowering Women and Community
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            Explore the various initiatives aimed at preserving Igbo culture and empowering women in our communities.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              title: "Cultural Preservation",
              description:
                "We actively safeguard Igbo traditions and stories, ensuring they are passed on to future generations through workshops and community events.",
            },
            {
              title: "Leadership Guidance",
              description:
                "Providing local leaders with advice and mentorship, we help shape resilient, empowered women ready to face community challenges with integrity.",
            },
            {
              title: "Conflict Resolution",
              description:
                "Our council offers mediation services, using our wisdom and experience to resolve disputes harmoniously and strengthen community bonds.",
            },
          ].map((item, i) => (
            <article
              key={item.title}
              className="p-6 rounded-xl bg-surface border border-brand-200/60 shadow-sm hover:shadow-md hover:border-brand-300/60 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-display text-display-sm text-brand-900">{item.title}</h3>
              <p className="mt-3 text-brand-700 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section variant="accent-subtle">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
              The Story Behind Nkata ndi Inyom Igbo
            </h2>
            <p className="mt-6 text-brand-700 leading-relaxed">
              With decades of commitment, Nkata ndi Inyom Igbo has cultivated a strong presence within the community where influential women come together. Our vast experience in counsel and cultural preservation is unmatched, as we uplift generations through our programs. We advocate for gender equality and women’s rights, ensuring their voices resonate in local leadership.
            </p>
            <ButtonLink href="/about" className="mt-8" variant="outline">
              Learn More
            </ButtonLink>
          </div>
          <div className="bg-brand-100/50 rounded-2xl aspect-[4/3] flex items-center justify-center text-brand-600 text-sm">
            [Image placeholder — our story]
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section variant="muted">
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="font-display text-display-sm sm:text-2xl text-brand-900 italic leading-relaxed">
            “Joining Nkata ndi Inyom Igbo transformed my perspective on leadership. Their support is invaluable for women aspiring to make a difference.”
          </p>
          <footer className="mt-6">
            <cite className="not-italic font-semibold text-brand-800">Chinedu Obi</cite>
          </footer>
        </blockquote>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-choose">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
            Why Choose Nkata ndi Inyom Igbo?
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            We are dedicated to empowering women through cultural preservation, building a community of leaders guided by wisdom and mutual respect.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Community Leadership",
              description:
                "Our commitment to empowering women leaders creates a ripple effect, inspiring younger generations to step into roles that uplift our entire community.",
            },
            {
              title: "Cultural Heritage",
              description:
                "By preserving our unique cultural identity, we ensure that the richness of Igbo traditions continues to thrive in our ever-changing world.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href="/offerings"
              className="group p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-accent-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display text-display-sm text-brand-900 group-hover:text-accent-700 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-brand-700 leading-relaxed">{item.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent-600 group-hover:text-accent-700">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="accent-subtle" id="get-involved">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
            Get Involved Today
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            Join our mission in empowering women and safeguarding Igbo heritage. Together, we can make a lasting impact in our communities.
          </p>
          <ButtonLink href="/contact" size="lg" className="mt-8">
            Join Us Now
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
