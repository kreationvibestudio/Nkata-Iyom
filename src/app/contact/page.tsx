import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Nkata ndi Inyom Igbo. Join us, inquire about events, or learn how you can get involved.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Join our mission, inquire about events, or learn how you can get involved. We’d love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="font-display text-display-sm text-brand-900">Get in touch</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              Contact form and contact details will be added when copy and preferences are provided. For now, this page establishes the layout and structure.
            </p>
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-lg bg-surface-muted border border-brand-200/60">
                <p className="text-sm font-medium text-brand-600">Email</p>
                <p className="text-brand-800">[Contact email to be added]</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-muted border border-brand-200/60">
                <p className="text-sm font-medium text-brand-600">Location</p>
                <p className="text-brand-800">[Location / address to be added]</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-brand-200/60 bg-surface-muted">
            <h3 className="font-display text-lg text-brand-900">Send a message</h3>
            <p className="mt-2 text-sm text-brand-600">
              Form fields (name, email, message, etc.) will be wired when design and backend are confirmed.
            </p>
            <div className="mt-6 h-48 flex items-center justify-center text-brand-500 text-sm border border-dashed border-brand-300 rounded-lg">
              [Contact form placeholder]
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
