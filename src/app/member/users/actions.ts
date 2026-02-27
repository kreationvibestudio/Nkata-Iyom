"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProfile, isAdmin } from "@/lib/profiles";

export async function createUser(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !isAdmin(profile)) redirect("/member");

  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;
  const role = (formData.get("role") as string) === "staff" ? "staff" : "admin";
  if (!email) redirect("/member/users?error=" + encodeURIComponent("Email is required."));
  if (!password || password.length < 6) redirect("/member/users?error=" + encodeURIComponent("Password must be at least 6 characters."));

  const admin = createAdminClient();
  const { data: newUser, error: authError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (authError) redirect("/member/users?error=" + encodeURIComponent(authError.message));

  const { error: profileError } = await admin.from("profiles").insert({
    id: newUser.user.id,
    email: newUser.user.email!,
    role,
  });
  if (profileError) {
    console.error("profiles insert error:", profileError);
    redirect("/member/users?error=" + encodeURIComponent("User was created but role could not be saved. Add them manually in Supabase."));
  }
  revalidatePath("/member/users");
  redirect("/member/users?msg=" + encodeURIComponent("User created. Share the password securely."));
}
