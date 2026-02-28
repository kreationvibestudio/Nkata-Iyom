import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata = {
  title: "Management Team",
  description:
    "Meet the Management Team of Nkata Ndi Inyom Igbo. The team driving our programs and day-to-day operations.",
};

export default function ManagementPage() {
  return (
    <>
      <PageBanner
        variant="about"
        title="Management Team"
        description="The team driving our programs and day-to-day operations."
      />

      <Section variant="muted">
        <div className="max-w-3xl min-w-0">
          <p className="text-brand-700 leading-relaxed">
            The Management Team of Nkata Ndi Inyom Igbo oversees the implementation of our programs, events, and outreach efforts. Together with our Board, they work to advance our mission of empowering Igbo women and preserving our culture.
          </p>
          <p className="mt-4 text-brand-700 leading-relaxed">
            Management team profiles will be added here as they become available.
          </p>
        </div>
      </Section>
    </>
  );
}
