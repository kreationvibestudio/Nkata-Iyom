"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProfile, hasMemberAccess } from "@/lib/profiles";

function slugify(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = (formData.get("title") as string)?.trim();
  const slugInput = (formData.get("slug") as string)?.trim();
  const slug = slugInput ? slugify(slugInput) : slugify(title ?? "");
  const excerpt = (formData.get("excerpt") as string) || "";
  const body = (formData.get("body") as string) || "";
  if (!title) redirect("/member/blog/new?error=" + encodeURIComponent("Title is required."));
  const admin = createAdminClient();
  const { error } = await admin.from("blog_posts").insert({
    title,
    slug: slug || "post",
    excerpt: excerpt.trim(),
    body: body.trim(),
  });
  if (error) redirect("/member/blog/new?error=" + encodeURIComponent(error.message));
  revalidatePath("/blog");
  revalidatePath("/member/blog");
  redirect("/member/blog");
}

export async function updatePost(id: string, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = (formData.get("title") as string)?.trim();
  const slugInput = (formData.get("slug") as string)?.trim();
  const slug = slugInput ? slugify(slugInput) : slugify(title ?? "");
  const excerpt = (formData.get("excerpt") as string) || "";
  const body = (formData.get("body") as string) || "";
  if (!title) redirect("/member/blog/" + id + "/edit?error=" + encodeURIComponent("Title is required."));
  const admin = createAdminClient();
  const { error } = await admin.from("blog_posts").update({
    title,
    slug: slug || "post",
    excerpt: excerpt.trim(),
    body: body.trim(),
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) redirect("/member/blog/" + id + "/edit?error=" + encodeURIComponent(error.message));
  revalidatePath("/blog");
  revalidatePath("/member/blog");
  redirect("/member/blog");
}

export async function deletePost(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const admin = createAdminClient();
  await admin.from("blog_posts").delete().eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/member/blog");
  redirect("/member/blog");
}
