import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Outreaches",
  description:
    "NNII outreach — where vision meets people. Capacity-building, skills development, health awareness, and community empowerment engagements across communities.",
};

export default function OutreachesPage() {
  return (
    <>
      <PageBanner
        variant="offerings"
        title="Outreaches"
        description="Where vision meets people — engaging communities directly with practical, impact-driven programmes."
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
              For us, outreach is where vision meets people. We go beyond conversations and conferences to engage communities directly — listening, supporting, educating, and responding to real needs on the ground. From capacity-building initiatives and skills development programmes to health awareness, value reorientation, and community empowerment engagements, our outreach efforts are practical, inclusive, and impact-driven. We prioritise underserved groups, strengthen local structures, and foster partnerships that ensure sustainability beyond each intervention.
            </p>
          </div>
          <ButtonLink href="/offerings" variant="outline" className="mt-8">
            View all programmes
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
