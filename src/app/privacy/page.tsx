import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for Nkata Ndi Inyom Igbo.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        description="Privacy policy content will be added when provided by the client."
      />

      <Section variant="muted">
        <div className="max-w-2xl prose prose-brand text-brand-700">
          <p>Placeholder for privacy policy. Update with legal copy when available.</p>
        </div>
      </Section>
    </>
  );
}
