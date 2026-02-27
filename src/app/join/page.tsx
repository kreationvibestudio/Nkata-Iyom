import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { submitJoinForm } from "./actions";

export const metadata = {
  title: "Join Us",
  description:
    "Apply to join Nkata ndi Inyom Igbo. Fill in your details to express your interest in membership.",
};

const inputClass =
  "w-full min-h-[44px] rounded-md border border-brand-300 px-3 py-2.5 sm:py-2 text-brand-900 placeholder:text-brand-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 min-w-0";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { error, success } = await searchParams;

  if (success) {
    return (
      <>
        <PageHero title="Join Us" description="Apply to join Nkata ndi Inyom Igbo." />
        <Section variant="muted">
          <div className="max-w-lg mx-auto text-center p-8 rounded-xl border border-brand-200/60 bg-surface">
            <h2 className="font-display text-display-sm text-brand-900">Thank you</h2>
            <p className="mt-3 text-brand-700">
              Your application has been received. We will get back to you as soon as we can.
            </p>
            <Link href="/" className="mt-6 inline-block text-primary-500 hover:text-primary-600 font-medium">
              ← Back to home
            </Link>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Join Us"
        description="Apply to join Nkata ndi Inyom Igbo. Please fill in the form below."
      />
      <Section variant="muted">
        <div className="max-w-2xl mx-auto">
          {error && (
            <p className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 text-sm" role="alert">
              {error}
            </p>
          )}
          <form action={submitJoinForm} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="family_name" className={labelClass}>Family name</label>
                <input id="family_name" name="family_name" type="text" required className={inputClass} placeholder="Family name" />
              </div>
              <div>
                <label htmlFor="first_name" className={labelClass}>First name</label>
                <input id="first_name" name="first_name" type="text" required className={inputClass} placeholder="First name" />
              </div>
            </div>
            <div>
              <label htmlFor="middle_name" className={labelClass}>Middle name</label>
              <input id="middle_name" name="middle_name" type="text" className={inputClass} placeholder="Middle name" />
            </div>
            <div>
              <label htmlFor="title_s" className={labelClass}>Title(s)</label>
              <input id="title_s" name="title_s" type="text" className={inputClass} placeholder="e.g. Dr, Mrs, Chief" />
            </div>
            <div>
              <label htmlFor="date_of_birth" className={labelClass}>Date of birth</label>
              <input id="date_of_birth" name="date_of_birth" type="date" className={inputClass} />
            </div>
            <div>
              <label htmlFor="address" className={labelClass}>Address</label>
              <textarea id="address" name="address" rows={3} className={inputClass} placeholder="Full address" />
            </div>
            <div>
              <label htmlFor="state_of_origin" className={labelClass}>State of origin</label>
              <input id="state_of_origin" name="state_of_origin" type="text" className={inputClass} placeholder="State of origin" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email address</label>
              <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="phone_number" className={labelClass}>Phone number</label>
              <input id="phone_number" name="phone_number" type="tel" className={inputClass} placeholder="e.g. +234 800 000 0000" />
            </div>
            <div>
              <label htmlFor="occupation" className={labelClass}>Occupation</label>
              <input id="occupation" name="occupation" type="text" className={inputClass} placeholder="Occupation" />
            </div>
            <div>
              <label htmlFor="educational_qualifications" className={labelClass}>
                Educational qualifications
              </label>
              <textarea
                id="educational_qualifications"
                name="educational_qualifications"
                rows={6}
                className={inputClass}
                placeholder="List primary school, secondary school, and university (each on a new line). Include dates attended if possible, e.g.&#10;Primary: School Name (1990–1996)&#10;Secondary: School Name (1996–2002)&#10;University: Institution (2002–2006)"
              />
            </div>
            <div>
              <label htmlFor="other_professional_qualifications" className={labelClass}>
                Other professional qualifications
              </label>
              <textarea
                id="other_professional_qualifications"
                name="other_professional_qualifications"
                rows={4}
                className={inputClass}
                placeholder="Certifications, training, etc."
              />
            </div>
            <div>
              <label htmlFor="your_values" className={labelClass}>Your values</label>
              <textarea id="your_values" name="your_values" rows={4} className={inputClass} placeholder="What values guide you?" />
            </div>
            <div>
              <label htmlFor="hobbies" className={labelClass}>Hobbies</label>
              <textarea id="hobbies" name="hobbies" rows={3} className={inputClass} placeholder="Your hobbies and interests" />
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="submit"
                className="rounded-md bg-primary-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-600"
              >
                Submit application
              </button>
              <Link href="/" className="rounded-md border border-brand-300 px-6 py-2.5 text-sm text-brand-700 hover:bg-brand-50">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
