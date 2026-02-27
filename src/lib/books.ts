import { createClient } from "@/lib/supabase/server";

export type BookRow = {
  id: string;
  title: string;
  category: string;
  description: string;
  cover_url: string | null;
  created_at: string;
  updated_at: string;
};

export async function getBooks(): Promise<BookRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("books")
    .select("*")
    .order("title", { ascending: true });
  if (error) {
    console.error("getBooks error:", error);
    return [];
  }
  return (data ?? []) as BookRow[];
}

export async function getBookById(id: string): Promise<BookRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("books").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error("getBookById error:", error);
    return null;
  }
  return data as BookRow | null;
}
