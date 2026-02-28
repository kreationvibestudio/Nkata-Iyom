import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Donate",
  description:
    "Invest in the Alaigbo we deserve. Your donation to Nkata Ndi Inyom Igbo Foundation strengthens voices, expands opportunity, and helps build a safer, stronger South East.",
};

export default function DonatePage() {
  return (
    <>
      <PageBanner
        variant="about"
        title="Donate"
        description="Invest in building the Alaigbo we deserve"
      />

      <Section variant="muted">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-brand-700 leading-relaxed space-y-6">
            <p>
              Transformation does not fund itself. It is built — deliberately, responsibly, and collectively.
            </p>
            <p>
              At Nkata Ndi Inyom Igbo Foundation, we are shaping a future defined by ethical leadership, economic inclusion, youth development, and cultural renewal across the South East of Nigeria. We are building platforms where Igbo women lead boldly, where young people gain direction and opportunity, and where communities rise with dignity and structure.
            </p>
            <p>
              Your donation is not a token contribution.
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li>When you give, you strengthen voices.</li>
              <li>When you give, you expand opportunity.</li>
              <li>When you give, you help build a safer, stronger, and more prosperous region.</li>
            </ul>
            <p className="font-semibold text-brand-900">
              Partner with us. Invest in transformation.
            </p>
          </div>

          <div className="rounded-xl border border-brand-200 bg-primary-50/50 p-6 sm:p-8 max-w-md">
            <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">Bank details</p>
            <p className="text-brand-700 text-sm mb-4">
              Kindly deposit your donations into the following account.
            </p>
            <dl className="space-y-3 text-brand-800">
              <div>
                <dt className="text-sm text-brand-600">Account Name</dt>
                <dd className="font-medium">Nkata Ndi Inyom Igbo Foundation</dd>
              </div>
              <div>
                <dt className="text-sm text-brand-600">Account Number</dt>
                <dd className="font-medium font-mono text-lg">1024346943</dd>
              </div>
              <div>
                <dt className="text-sm text-brand-600">Bank</dt>
                <dd className="font-medium">UBA Plc.</dd>
              </div>
            </dl>
          </div>

          <div className="pt-4">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
