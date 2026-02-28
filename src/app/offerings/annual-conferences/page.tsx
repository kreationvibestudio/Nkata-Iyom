import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Annual Conferences",
  description:
    "Nkata Ndi Inyom Igbo Annual Conference — a yearly gathering for dialogue, unity, and development. A platform for women to elevate their voices and break barriers.",
};

export default function AnnualConferencesPage() {
  return (
    <>
      <PageBanner
        variant="offerings"
        title="Annual Conferences"
        description="A yearly gathering for dialogue, unity, and the advancement of women and society."
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
              Nkata Ndi Inyom Igbo Annual Conference is a yearly gathering of progressive individuals who believe in the value of conversations/dialogue as a veritable tool for the unity and development of Alaigbo and Nigeria, in general. We are dedicated to being a VOICE for the promotion of women, girls, and youth, geared towards ensuring equity and justice, with a mission to rebuild the national gender partnership for the advancement of equitable development.
            </p>
            <p>
              As an organization deeply committed to building and supporting Igbo women to actualize their full potential, we believe that empowering women is not just a cause; it is a transformative movement that can shape the very fabric of our society. Our conference is a testament to our unwavering dedication to creating a platform for women to elevate their voices, inspire one another, and break barriers that hinder their progress.
            </p>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden border border-brand-200/60 shadow-sm">
            <Image
              src="/offerings/annual-conference-2025.png"
              alt="NNII 2025 Conference — Innovative Solutions and Funding for Women and Youth in Digital Literacy and Agribusiness"
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
