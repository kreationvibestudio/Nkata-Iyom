"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProfile, hasMemberAccess } from "@/lib/profiles";

export async function createBook(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = (formData.get("title") as string)?.trim();
  const category = (formData.get("category") as string)?.trim() || "General";
  const description = (formData.get("description") as string)?.trim() || "";
  const cover_url = (formData.get("cover_url") as string)?.trim() || null;
  if (!title) redirect("/member/books/new?error=" + encodeURIComponent("Title is required."));
  const admin = createAdminClient();
  const { error } = await admin.from("books").insert({ title, category, description, cover_url });
  if (error) redirect("/member/books/new?error=" + encodeURIComponent(error.message));
  revalidatePath("/library");
  revalidatePath("/member/books");
  redirect("/member/books");
}

export async function updateBook(id: string, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = (formData.get("title") as string)?.trim();
  const category = (formData.get("category") as string)?.trim() || "General";
  const description = (formData.get("description") as string)?.trim() || "";
  const cover_url = (formData.get("cover_url") as string)?.trim() || null;
  if (!title) redirect("/member/books/" + id + "/edit?error=" + encodeURIComponent("Title is required."));
  const admin = createAdminClient();
  const { error } = await admin.from("books").update({
    title,
    category,
    description,
    cover_url,
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) redirect("/member/books/" + id + "/edit?error=" + encodeURIComponent(error.message));
  revalidatePath("/library");
  revalidatePath("/member/books");
  redirect("/member/books");
}

export async function deleteBook(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const admin = createAdminClient();
  await admin.from("books").delete().eq("id", id);
  revalidatePath("/library");
  revalidatePath("/member/books");
  redirect("/member/books");
}
