import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for Nkata ndi Inyom Igbo.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance">
            Privacy
          </h1>
          <p className="mt-4 text-brand-700">
            Privacy policy content will be added when provided by the client.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl prose prose-brand text-brand-700">
          <p>Placeholder for privacy policy. Update with legal copy when available.</p>
        </div>
      </Section>
    </>
  );
}
