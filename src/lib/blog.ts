import { createClient } from "@/lib/supabase/server";

export type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  created_at: string;
  updated_at: string;
};

export async function getBlogPosts(): Promise<BlogPostRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getBlogPosts error:", error);
    return [];
  }
  return (data ?? []) as BlogPostRow[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("getBlogPostBySlug error:", error);
    return null;
  }
  return data as BlogPostRow | null;
}
