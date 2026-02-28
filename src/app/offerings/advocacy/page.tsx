import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Advocacy",
  description:
    "NNII advocacy — strategic commitment to justice, inclusive leadership, and sustainable transformation in the South East. Amplifying voices of women and youth.",
};

export default function AdvocacyPage() {
  return (
    <>
      <PageBanner
        variant="offerings"
        title="Advocacy"
        description="Strategic commitment to justice, inclusive leadership, and sustainable transformation."
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
              At Nkata, advocacy is a strategic commitment to justice, inclusive leadership, and sustainable transformation in the South East of Nigeria. We amplify the voices of women and youth while engaging policymakers, traditional institutions, and strategic partners to address insecurity, gender-based violence, youth disenchantment, cultural erosion, and economic exclusion. Through policy engagement, value reorientation, and evidence-based action, we drive measurable impact—building a stronger, safer, and more prosperous region.
            </p>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden border border-brand-200/60 shadow-sm">
            <Image
              src="/offerings/advocacy.png"
              alt="Nkata Ndi Inyom Igbo advocacy — leadership and community in traditional attire, partnering for development"
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
