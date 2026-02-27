import { redirect } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { MemberAuth } from "@/components/member/MemberAuth";

export const metadata = {
  title: "Login | Member area",
  description: "Sign in to the member area. Access is by invitation only.",
};

interface LoginPageProps {
  searchParams: Promise<{ redirect?: string }>;
}

export default async function MemberLoginPage({ searchParams }: LoginPageProps) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;

  if (user && hasMemberAccess(profile)) {
    redirect("/member");
  }

  const { redirect: redirectTo } = await searchParams;

  return (
    <>
      <PageHero
        title="Login"
        description="Sign in to the member area. Access is by invitation only."
      />
      <Section variant="muted">
        <div className="max-w-md mx-auto">
          <MemberAuth user={null} redirectTo={redirectTo} />
        </div>
      </Section>
    </>
  );
}
