import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Nkata ndi Inyom Igbo. Join us, inquire about events, or learn how you can get involved.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        variant="contact"
        title="Contact Us"
        description="Join our mission, inquire about events, or learn how you can get involved. We'd love to hear from you."
      />
      <Section variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="font-display text-display-sm text-brand-900">We&apos;d Love to Hear from You</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              Have a question or want to get involved? Send us a message and we&apos;ll get back to you as soon as we can.
            </p>
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-lg bg-surface-muted border border-brand-200/60">
                <p className="text-sm font-medium text-brand-600">Address</p>
                <p className="text-brand-800 whitespace-pre-line">
                  3 Umueze Street
                  {"\n"}Amawbia
                  {"\n"}Awka South LGA
                  {"\n"}Anambra State.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-muted border border-brand-200/60">
                <p className="text-sm font-medium text-brand-600">Phone</p>
                <p className="text-brand-800">
                  <a href="tel:+2348033139506" className="text-primary-500 hover:text-primary-600">
                    0803-313-9506
                  </a>
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-muted border border-brand-200/60">
                <p className="text-sm font-medium text-brand-600">Email</p>
                <p className="text-brand-800">
                  <a href="mailto:enquiries@nkatandiinyom.com" className="text-primary-500 hover:text-primary-600">
                    enquiries@nkatandiinyom.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-brand-200/60 bg-surface">
            <h3 className="font-display text-lg text-brand-900">Send a message</h3>
            <p className="mt-2 text-sm text-brand-600">
              Fill in your details and we&apos;ll respond as soon as possible.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
