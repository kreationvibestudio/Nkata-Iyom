import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/lib/profiles";
import { SignOutButton } from "@/components/member/SignOutButton";

export default async function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;

  if (!user || !profile) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-surface">
      <nav className="border-b border-brand-200 bg-surface-muted">
        <div className="container-narrow flex h-14 items-center gap-6">
          <Link href="/member" className="font-display font-semibold text-brand-900 hover:text-primary-500">
            Member area
          </Link>
          <Link href="/member/events" className="text-sm text-brand-700 hover:text-primary-600">
            Events
          </Link>
          <Link href="/member/blog" className="text-sm text-brand-700 hover:text-primary-600">
            Blog
          </Link>
          <Link href="/member/books" className="text-sm text-brand-700 hover:text-primary-600">
            Books
          </Link>
          <Link href="/member/users" className="text-sm text-brand-700 hover:text-primary-600">
            Users
          </Link>
          <span className="ml-auto text-sm text-brand-600">
            {user.email}
            <span className="ml-2 text-brand-500">({profile.role})</span>
          </span>
          <SignOutButton />
          <Link href="/" className="text-sm text-primary-500 hover:text-primary-600">
            ← Site
          </Link>
        </div>
      </nav>
      <main className="container-narrow section-padding">{children}</main>
    </div>
  );
}
