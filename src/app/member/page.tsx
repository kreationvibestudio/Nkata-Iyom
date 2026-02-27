import Link from "next/link";
import { redirect } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";

export const metadata = {
  title: "Member area",
  description:
    "Sign in to manage events, blog, books, and users. Admin and staff only.",
};

interface MemberPageProps {
  searchParams: Promise<{ redirect?: string; msg?: string }>;
}

export default async function MemberPage({ searchParams }: MemberPageProps) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  const { redirect: redirectTo, msg } = await searchParams;

  if (!user) {
    redirect("/member/login" + (redirectTo ? "?redirect=" + encodeURIComponent(redirectTo) : ""));
  }

  if (!hasMemberAccess(profile)) {
    return (
      <>
        <PageBanner variant="member" title="Member area" description="Sign in to manage the site." />
        <Section variant="muted">
          <div className="max-w-md mx-auto text-center p-8 rounded-xl border border-brand-200/60 bg-surface">
            <p className="text-brand-700">
              You don’t have access to the member area. Only users added by an administrator can sign in here.
            </p>
            <p className="mt-4 text-sm text-brand-600">
              Contact an administrator if you need access.
            </p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageBanner
        variant="member"
        title="Member area"
        description="Add and edit content for the site. Use the links below or the menu above."
      />
      <div className="section-padding container-narrow">
      <h1 className="sr-only">Dashboard</h1>
      {msg && (
        <p className="mt-4 text-sm text-green-600" role="alert">
          {msg}
        </p>
      )}

      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 min-w-0">
        <div className="rounded-xl border border-brand-200/60 bg-surface p-4 sm:p-6 min-w-0">
          <h2 className="font-display text-display-sm text-brand-900">Events</h2>
          <p className="mt-2 text-sm text-brand-600">
            Schedule workshops, meetings, and community events.
          </p>
          <Link href="/member/events" className="mt-4 inline-flex font-medium text-primary-500 hover:text-primary-600">
            Manage events →
          </Link>
        </div>

        <div className="rounded-xl border border-brand-200/60 bg-surface p-4 sm:p-6 min-w-0">
          <h2 className="font-display text-display-sm text-brand-900">Blog</h2>
          <p className="mt-2 text-sm text-brand-600">
            Write and edit blog posts.
          </p>
          <Link href="/member/blog" className="mt-4 inline-flex font-medium text-primary-500 hover:text-primary-600">
            Manage blog →
          </Link>
        </div>

        <div className="rounded-xl border border-brand-200/60 bg-surface p-4 sm:p-6 min-w-0">
          <h2 className="font-display text-display-sm text-brand-900">Books</h2>
          <p className="mt-2 text-sm text-brand-600">
            Add books to the Bookshelf.
          </p>
          <Link href="/member/books" className="mt-4 inline-flex font-medium text-primary-500 hover:text-primary-600">
            Manage books →
          </Link>
        </div>

        <div className="rounded-xl border border-brand-200/60 bg-surface-muted p-4 sm:p-6 min-w-0">
          <h2 className="font-display text-display-sm text-brand-900">Videos</h2>
          <p className="mt-2 text-sm text-brand-600">
            Videos are managed in the{" "}
            <a href="https://dashboard.mux.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              Mux dashboard
            </a>
            ; they appear in the Video Library once ready.
          </p>
        </div>

        <div className="rounded-xl border border-brand-200/60 bg-surface p-4 sm:p-6 min-w-0">
          <h2 className="font-display text-display-sm text-brand-900">Users</h2>
          <p className="mt-2 text-sm text-brand-600">
            Create users and assign roles (admin or staff). Admins only.
          </p>
          <Link href="/member/users" className="mt-4 inline-flex font-medium text-primary-500 hover:text-primary-600">
            Manage users →
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
