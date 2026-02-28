import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { submitJoinForm } from "./actions";

export const metadata = {
  title: "Join Us",
  description:
    "Join Nkata Ndi Inyom Igbo — a principled network of Igbo women committed to advancing leadership and shaping a more prosperous South East.",
};

const inputClass =
  "w-full min-h-[44px] rounded-md border border-brand-300 px-3 py-2.5 sm:py-2 text-brand-900 placeholder:text-brand-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 min-w-0";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";
const cardClass = "rounded-xl border border-brand-200/60 bg-surface p-6 sm:p-8 shadow-sm";

const TITLES = ["Dr", "Prof", "Mr", "Mrs"] as const;
const SEX_OPTIONS = ["Male", "Female"] as const;
const MEMBERSHIP_CATEGORIES = [
  "Professional Member",
  "Early Career/Student",
  "Allied Health Professional",
  "Caregiver/Family Advocate",
  "Community Member",
  "Corporate/Institutional",
  "Lifetime Member",
  "Others",
] as const;
const AREAS_OF_INTEREST = [
  "Clinical Research",
  "Public Health & Epidemiology",
  "Brain Health & Prevention",
  "Clinical Trials",
  "Care & Support Services",
  "Policy & Advocacy",
  "Education & Training",
  "Community Outreach",
  "Fundraising & Partnership",
] as const;
const SKILLS_OPTIONS = [
  "Research Collaboration",
  "Event Planning",
  "Public Speaking",
  "Grant Writing",
  "Mentorship",
  "Community Engagement",
  "Policy Advocacy",
  "Fundraising",
] as const;
const PAYMENT_OPTIONS = [
  { value: "20000", label: "Membership Dues (₦20,000)" },
  { value: "70000", label: "Membership Dues + Voluntary Support (₦70,000)" },
] as const;

const CODE_OF_CONDUCT_TEXT =
  "I agree to abide by the NNII Code of Conduct and uphold the values of integrity, respect, and collaboration in all membership activities.";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { error, success } = await searchParams;

  if (success) {
    return (
      <>
        <PageHero title="Join Us" />
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
      <PageHero title="Join Us" />
      <Section variant="muted">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-brand-700 leading-relaxed space-y-4">
            <p>
              Change does not happen by intention alone. It happens when committed people step forward. At Nkata, we are building a principled and purpose-driven network of Igbo women and ladies (by descent or by marriage) who are committed to advancing leadership, strengthening communities, and shaping a more secure and prosperous South East of Nigeria.
            </p>
            <p>
              Whether you are a professional, entrepreneur, policymaker, development partner, or passionate volunteer, there is a place for you within Nkata. Your voice, expertise, influence, and resources can deepen our advocacy, expand our outreach, and drive sustainable impact across generations.
            </p>
            <p className="font-medium">
              Join a platform driven by integrity, inclusion, and measurable results. Join Nkata today.
            </p>
          </div>
          {error && (
            <p className="p-4 rounded-lg bg-red-50 text-red-700 text-sm" role="alert">
              {error}
            </p>
          )}
          <form action={submitJoinForm} method="post" encType="multipart/form-data" className="space-y-8">
            {/* Section 1: Personal Information */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                1. Personal Information
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="full_name" className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <span className={labelClass}>Title</span>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {TITLES.map((t) => (
                      <label key={t} className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="title" value={t} className="text-primary-500" />
                        <span className="text-brand-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="date_of_birth" className={labelClass}>
                    Date of Birth (Month & Day) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="date_of_birth"
                    name="date_of_birth"
                    type="date"
                    required
                    className={inputClass}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div>
                  <span className={labelClass}>Sex</span>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {SEX_OPTIONS.map((s) => (
                      <label key={s} className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="sex" value={s} className="text-primary-500" />
                        <span className="text-brand-700">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Contact Information */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                2. Contact Information
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="nationality" className={labelClass}>Nationality</label>
                  <input
                    id="nationality"
                    name="nationality"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="institution_organization" className={labelClass}>
                    Institution/Organization
                  </label>
                  <input
                    id="institution_organization"
                    name="institution_organization"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="position_role" className={labelClass}>Position/Role</label>
                  <input
                    id="position_role"
                    name="position_role"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="mailing_address" className={labelClass}>Mailing Address</label>
                  <textarea
                    id="mailing_address"
                    name="mailing_address"
                    rows={3}
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="city_state_country" className={labelClass}>
                    City/State/Country of Residence
                  </label>
                  <input
                    id="city_state_country"
                    name="city_state_country"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Membership Details */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                3. Membership Details
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="phone_number" className={labelClass}>Phone Number</label>
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <span className={labelClass}>Membership Category (Select One)</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {MEMBERSHIP_CATEGORIES.map((c) => (
                      <label key={c} className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="membership_category" value={c} className="text-primary-500" />
                        <span className="text-brand-700">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-medium text-brand-600 mb-2">Area(s) of Interest</span>
                  <div className="flex flex-col gap-2">
                    {AREAS_OF_INTEREST.map((a) => (
                      <label key={a} className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="area_of_interest" value={a} className="text-primary-500" />
                        <span className="text-brand-700">{a}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Professional Background & Motivation */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                4. Professional Background & Motivation
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="highest_qualification" className={labelClass}>Highest Qualification</label>
                  <input
                    id="highest_qualification"
                    name="highest_qualification"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="specialization" className={labelClass}>Specialization</label>
                  <input
                    id="specialization"
                    name="specialization"
                    type="text"
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="years_of_experience" className={labelClass}>
                    Years of Experience (Numbers only)
                  </label>
                  <input
                    id="years_of_experience"
                    name="years_of_experience"
                    type="number"
                    min={0}
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="relevant_publications_projects" className={labelClass}>
                    Relevant Publications/Projects <span className="text-brand-400">(Optional)</span>
                  </label>
                  <textarea
                    id="relevant_publications_projects"
                    name="relevant_publications_projects"
                    rows={4}
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
                <div>
                  <label htmlFor="motivation_for_joining" className={labelClass}>
                    Motivation for Joining
                  </label>
                  <textarea
                    id="motivation_for_joining"
                    name="motivation_for_joining"
                    rows={6}
                    className={inputClass}
                    placeholder="Your answer (paragraph)"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Skills & Volunteer Interests */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                5. Skills & Volunteer Interests
              </h2>
              <div className="space-y-2">
                {SKILLS_OPTIONS.map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="skills_volunteer_interests"
                      value={s}
                      className="rounded text-primary-500"
                    />
                    <span className="text-brand-700">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 6: Payment (Optional) & Agreement */}
            <div className={cardClass}>
              <h2 className="font-display text-display-sm text-brand-900 mb-6">
                6. Payment (Optional) & Agreement
              </h2>
              <div className="space-y-5">
                <div>
                  <span className={labelClass}>Payment Selection</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {PAYMENT_OPTIONS.map((o) => (
                      <label key={o.value} className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="payment_option" value={o.value} className="text-primary-500" />
                        <span className="text-brand-700">{o.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="payment_proof" className={labelClass}>Proof of Payment Upload</label>
                  <input
                    id="payment_proof"
                    name="payment_proof"
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full text-sm text-brand-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-brand-300 file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                  />
                </div>
                <div>
                  <label className="inline-flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="code_of_conduct_agreed"
                      value="yes"
                      required
                      className="mt-1 rounded text-primary-500"
                    />
                    <span className="text-sm text-brand-700">{CODE_OF_CONDUCT_TEXT}</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="signature_name" className={labelClass}>
                    Electronic Signature (Type Full Name)
                  </label>
                  <input
                    id="signature_name"
                    name="signature_name"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Your answer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="submit"
                className="rounded-md bg-primary-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-600"
              >
                Submit application
              </button>
              <Link
                href="/"
                className="rounded-md border border-brand-300 px-6 py-2.5 text-sm text-brand-700 hover:bg-brand-50"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
