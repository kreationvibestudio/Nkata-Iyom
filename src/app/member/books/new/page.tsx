import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { createBook } from "../actions";

export const metadata = { title: "Member area — Add Book", description: "Add a book to the bookshelf." };

const inputClass = "w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";

export default async function NewBookPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");

  const { error } = await searchParams;
  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-2 inline-block">← Dashboard</Link>
      <Link href="/member/books" className="text-sm text-primary-500 hover:text-primary-600 mb-4 inline-block">← Back to books</Link>
      <h1 className="font-display text-display-sm text-brand-900 mt-2">Add book</h1>
      {error && <p className="mt-4 text-sm text-red-600" role="alert">{error}</p>}
      <form action={createBook} className="mt-6 max-w-lg space-y-4">
        <div>
          <label htmlFor="title" className={labelClass}>Title</label>
          <input id="title" name="title" type="text" required className={inputClass} placeholder="e.g. Igbo Traditions & Values" />
        </div>
        <div>
          <label htmlFor="category" className={labelClass}>Category</label>
          <input id="category" name="category" type="text" className={inputClass} placeholder="e.g. Culture, Leadership" />
        </div>
        <div>
          <label htmlFor="description" className={labelClass}>Description</label>
          <textarea id="description" name="description" rows={4} className={inputClass} placeholder="Short description" />
        </div>
        <div>
          <label htmlFor="cover_url" className={labelClass}>Cover image URL (optional)</label>
          <input id="cover_url" name="cover_url" type="url" className={inputClass} placeholder="https://..." />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">Add book</button>
          <Link href="/member/books" className="rounded-md border border-brand-300 px-4 py-2 text-sm text-brand-700 hover:bg-brand-50">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
