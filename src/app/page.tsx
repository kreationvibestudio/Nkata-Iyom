import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero with banner */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/main_banner_nkata.png"
            alt="Nkata ndi Inyom Igbo community in traditional purple and gold attire"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/60 to-brand-900/40 pointer-events-none"
            aria-hidden
          />
        </div>
        <div className="container-narrow section-padding relative z-10">
          <p className="text-sm font-medium text-primary-200 uppercase tracking-wider mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
            Nkata ndi Inyom Igbo
          </p>
          <h1 className="font-display text-display-xl sm:text-5xl md:text-display-xl text-white heading-balance max-w-3xl opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:60ms] drop-shadow-sm">
            Empowering Igbo Women Together
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:180ms]">
            Preserving our culture while fostering women’s leadership in Igbo communities through shared wisdom and strength.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:280ms]">
            <ButtonLink href="/join" size="lg">
              Join Us Now
            </ButtonLink>
            <ButtonLink href="/about" variant="outline" size="lg" className="!border-white/80 !text-white hover:!bg-white/10">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <Section id="pillars">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
            Our Key Pillars
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            The values that guide everything we do at NNII.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Dialogue & Conversations",
              description:
                "At NNII, we understand the power of dialogue and conversations. We believe that open and inclusive discussions are essential for understanding diverse perspectives, fostering unity, and finding innovative solutions to complex challenges. Through meaningful dialogue, we create spaces where everyone's voice is heard, valued, and respected. It's about coming together, sharing ideas, and building consensus for positive change.",
            },
            {
              title: "Equity",
              description:
                "Here at NNII, we are all about fairness and balance. We believe in shared gender partnership and governance where men and women contribute their quota towards sustainable development.",
            },
            {
              title: "Empowerment",
              description:
                "Empowering women is at the heart of what we do at NNII. Through education, mentorship, and advocacy, we provide women with the tools and resources they need to realize their full potential and make meaningful contributions to society. By investing in women's empowerment, we not only transform individual lives but also drive positive change for entire communities.",
            },
            {
              title: "Partnership",
              description:
                "We are firm believers in the power of collaboration as encapsulated in our motto, “Partnering for development.” By working together across genders and sectors, we maximize our collective impact and address the challenges facing our communities. Through shared responsibility and mutual support, we build a stronger and more resilient society for all.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="p-6 rounded-xl bg-surface border border-brand-200/60 shadow-sm hover:shadow-md hover:border-primary-200/60 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display text-display-sm text-brand-900">{item.title}</h3>
              <p className="mt-3 text-brand-700 leading-relaxed text-sm flex-1">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

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
      <Section variant="primary-subtle">
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
              className="group p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-brand-700 leading-relaxed">{item.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
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
      <Section variant="primary-subtle" id="get-involved">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-display-md sm:text-display-lg text-brand-900 heading-balance">
            Get Involved Today
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            Join our mission in empowering women and safeguarding Igbo heritage. Together, we can make a lasting impact in our communities.
          </p>
          <ButtonLink href="/join" size="lg" className="mt-8">
            Join Us Now
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
