import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Nkata Webinar Series",
  description:
    "An interactive programme driving conversations on critical issues affecting women, girls, and society. Harnessing the power of meaningful dialogue for positive change.",
};

export default function WebinarSeriesPage() {
  return (
    <>
      <PageBanner
        variant="offerings"
        title="Nkata Webinar Series"
        description="Interactive programmes that drive conversations on critical issues affecting women, girls, and society."
      />

      <Section variant="muted">
        <div className="max-w-3xl min-w-0">
          <Link
            href="/offerings"
            className="text-sm font-medium text-primary-500 hover:text-primary-600 mb-6 inline-block"
          >
            ← What We Do
          </Link>
          <div className="prose prose-brand max-w-none text-brand-700 leading-relaxed space-y-4">
            <p>
              The Nkata Webinar series, an initiative of NNII, is an interactive programme that seeks to drive and deepen conversations on critical issues that affect women/girls and society at large. It is a platform to lend our voices through harnessing the power of meaningful conversations to drive positive change and development in society.
            </p>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden border border-brand-200/60 shadow-sm">
            <Image
              src="/offerings/webinar-series.png"
              alt="NKATA NDI INYOM IGBO International Day for the Elimination of Violence Against Women — 16 Days of Activism webinar flyer"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <ButtonLink href="/offerings" variant="outline" className="mt-8">
            View all programmes
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
