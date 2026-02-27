import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { updatePost } from "../../actions";

const inputClass = "w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");

  const { id } = await params;
  const { error: errorMsg } = await searchParams;
  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();
  if (error || !post) notFound();

  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-2 inline-block">← Dashboard</Link>
      <Link href="/member/blog" className="text-sm text-primary-500 hover:text-primary-600 mb-4 inline-block">← Back to blog</Link>
      <h1 className="font-display text-display-sm text-brand-900 mt-2">Edit post</h1>
      {errorMsg && <p className="mt-4 text-sm text-red-600" role="alert">{errorMsg}</p>}
      <form action={updatePost.bind(null, id)} className="mt-6 max-w-2xl space-y-4">
        <div>
          <label htmlFor="title" className={labelClass}>Title</label>
          <input id="title" name="title" type="text" required defaultValue={post.title} className={inputClass} />
        </div>
        <div>
          <label htmlFor="slug" className={labelClass}>Slug</label>
          <input id="slug" name="slug" type="text" defaultValue={post.slug} className={inputClass} />
        </div>
        <div>
          <label htmlFor="excerpt" className={labelClass}>Excerpt</label>
          <textarea id="excerpt" name="excerpt" rows={2} defaultValue={post.excerpt ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="body" className={labelClass}>Body</label>
          <textarea id="body" name="body" rows={12} defaultValue={post.body ?? ""} className={inputClass} />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">Save changes</button>
          <Link href="/member/blog" className="rounded-md border border-brand-300 px-4 py-2 text-sm text-brand-700 hover:bg-brand-50">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
