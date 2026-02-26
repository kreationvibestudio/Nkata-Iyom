import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Member area",
  description:
    "Sign in to access the bookshelf, video library, and member resources.",
};

export default function MemberPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Member area
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Sign in to access the bookshelf, video library, and your dashboard. Auth will be connected in a later phase.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-md mx-auto text-center">
          <div className="p-8 rounded-xl border border-brand-200/60 bg-surface">
            <p className="text-brand-700 mb-6">
              Login and registration will be wired with NextAuth or Clerk. For now, you can explore the public pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/library">Browse Bookshelf</ButtonLink>
              <ButtonLink href="/videos" variant="outline">Browse Videos</ButtonLink>
            </div>
          </div>
          <p className="mt-6 text-sm text-brand-600">
            <Link href="/contact" className="text-accent-600 hover:text-accent-700 font-medium">
              Contact us
            </Link>{" "}
            to inquire about membership.
          </p>
        </div>
      </Section>
    </>
  );
}
