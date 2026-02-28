import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { MembershipDriveVideo } from "@/components/video/MembershipDriveVideo";
import { getVideos, getPlaybackIdForAsset } from "@/lib/mux";

export default async function HomePage() {
  let playbackId = process.env.MUX_MEMBERSHIP_DRIVE_PLAYBACK_ID ?? null;
  if (!playbackId && process.env.MUX_MEMBERSHIP_DRIVE_ASSET_ID) {
    playbackId = await getPlaybackIdForAsset(process.env.MUX_MEMBERSHIP_DRIVE_ASSET_ID);
  }
  if (!playbackId) {
    playbackId = (await getVideos()).videos[0]?.playbackId ?? null;
  }
  return (
    <>
      {/* Hero with banner */}
      <section className="relative min-h-[80dvh] sm:min-h-[85dvh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home_page_banner.png"
            alt="Nkata Ndi Inyom Igbo Annual Conference 2023 — Women: A Unifying Force in Peace Building"
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
            Nkata Ndi Inyom Igbo
          </p>
          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-display-xl text-white heading-balance max-w-3xl opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:60ms] drop-shadow-sm">
            Empowering Igbo Women Through Shared Leadership and Culture
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:180ms]">
            Preserving our culture while fostering women’s leadership in Igbo communities through gender partnership.
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
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <h2 className="font-display text-xl sm:text-display-md lg:text-display-lg text-brand-900 heading-balance">
            Key Pillars
          </h2>
          <p className="mt-4 text-brand-700 text-lg">
            The values that guide everything we do at NNII.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Dialogue/Conversations",
              description:
                "At NNII, we understand the power of dialogue and conversations. We believe that open and inclusive discussions are essential for understanding diverse perspectives, fostering unity, and finding innovative solutions to complex challenges. Through meaningful dialogue, we create spaces where everyone's voice is heard, valued, and respected. It's about coming together, sharing ideas, and building consensus for positive change.",
              image: "/about/core-values-1.png",
              imageAlt: "NNII conference — women engaged at round tables, dialogue and community",
            },
            {
              title: "Equity",
              description:
                "Here at NNII, we are all about fairness and balance. We believe in shared gender partnership/governance where men and women contribute their quota towards sustainable development.",
              image: "/about/core-values-2.png",
              imageAlt: "NNII conference — community and partnership, Partnering for Development",
            },
            {
              title: "Empowerment",
              description:
                "Empowering women is at the heart of what we do at NNII. Through education, mentorship, and advocacy, we provide women with the tools and resources they need to realize their full potential and make meaningful contributions to society. By investing in women's empowerment, we not only transform individual lives but also drive positive change for entire communities.",
              image: "/about/core-values-3.png",
              imageAlt: "NNII members — sisterhood, celebration and shared purpose",
            },
            {
              title: "Partnership",
              description:
                "We are firm believers in the power of collaboration as encapsulated in our motto, “Partnering for development.” By working together across genders and sectors, we maximize our collective impact and address the challenges facing our communities. Through shared responsibility and mutual support, we build a stronger and more resilient society for all.",
              image: "/about/core-values-4.png",
              imageAlt: "NNII event — women participating, registration and engagement",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="p-4 sm:p-6 rounded-xl bg-surface border border-brand-200/60 shadow-sm hover:shadow-md hover:border-primary-200/60 transition-all duration-300 flex flex-col min-w-0"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-primary-200/60 shrink-0 mx-auto mb-4">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                  sizes="96px"
                />
              </div>
              <h3 className="font-display text-display-sm text-brand-900">{item.title}</h3>
              <p className="mt-3 text-brand-700 leading-relaxed text-sm flex-1">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section variant="primary-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center min-w-0">
          <div className="min-w-0">
            <h2 className="font-display text-xl sm:text-display-md lg:text-display-lg text-brand-900 heading-balance">
              The Story Behind Nkata Ndi Inyom Igbo
            </h2>
            <div className="mt-6 space-y-4 text-brand-700 leading-relaxed">
              <p>
                There is something powerful about women gathering with purpose. That is the spirit behind Nkata Ndi Inyom Igbo.
              </p>
              <p>
                Nkata Ndi Inyom Igbo has become a respected space where Igbo women come together to share ideas, offer guidance, and strengthen one another. It was formed out of a clear need, to create a forum where women can speak openly, preserve cultural values, and contribute meaningfully to community development.
              </p>
              <p>
                At its core, Nkata Ndi Inyom Igbo focuses on dialogue, mentorship, and cultural continuity. Through discussions, programs, and outreach efforts, members support younger generations, promote unity among women, and encourage active participation in social and civic life.
              </p>
              <p>
                The group also stands for gender inclusion and women's rights within the framework of Igbo culture. It believes that when women are informed, empowered, and organized, their voices carry weight in families, communities, and leadership spaces.
              </p>
              <p>
                Nkata Ndi Inyom Igbo is driven by commitment, shared values, and a clear vision to uplift Igbo women today and for the future.
              </p>
            </div>
            <ButtonLink href="/about" className="mt-8" variant="outline">
              Learn More
            </ButtonLink>
          </div>
          <div className="relative rounded-2xl aspect-[4/3] overflow-hidden bg-brand-100/50">
            <Image
              src="/our-story.png"
              alt="Our story — Nkata Ndi Inyom Igbo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Membership Drive Video */}
      <Section variant="muted" id="membership-video">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl sm:text-display-md text-brand-900 heading-balance mb-6 text-center">
            Membership Drive
          </h2>
          <MembershipDriveVideo playbackId={playbackId} />
        </div>
      </Section>

      {/* Testimonial */}
      <Section variant="muted">
        <blockquote className="max-w-2xl mx-auto text-center px-2 sm:px-0">
          <p className="font-display text-lg sm:text-display-sm md:text-2xl text-brand-900 italic leading-relaxed">
            “Nkata Ndi Inyom Igbo has given me a platform to connect with like-minded women who are passionate about our culture and the development of our communities. I am proud to be part of this movement.”
          </p>
          <footer className="mt-6">
            <cite className="not-italic font-semibold text-brand-800">Nkechi Okoli</cite>
          </footer>
        </blockquote>
      </Section>

      {/* CTA */}
      <Section variant="primary-subtle" id="get-involved">
        <div className="text-center max-w-2xl mx-auto px-2 sm:px-0">
          <h2 className="font-display text-xl sm:text-display-md lg:text-display-lg text-brand-900 heading-balance">
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
