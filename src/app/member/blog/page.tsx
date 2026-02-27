import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getBlogPosts } from "@/lib/blog";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { deletePost } from "./actions";

export const metadata = { title: "Member area — Blog", description: "Manage blog posts." };

export default async function MemberBlogPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");

  const posts = await getBlogPosts();
  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-6 inline-block">← Dashboard</Link>
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-display-sm text-brand-900">Blog</h1>
        <Link href="/member/blog/new" className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">New post</Link>
      </div>
      {posts.length === 0 ? (
        <p className="text-brand-600">No posts yet. Write one to get started.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-brand-200 bg-surface">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-brand-900">{post.title}</p>
                <p className="text-sm text-brand-600">/blog/{post.slug} · {new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
              </div>
              <div className="flex gap-4">
                <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-600 hover:text-primary-600">View</Link>
                <Link href={`/member/blog/${post.id}/edit`} className="text-sm text-primary-500 hover:text-primary-600">Edit</Link>
                <form action={deletePost.bind(null, post.id)} className="inline">
                  <button type="submit" className="text-sm text-red-600 hover:text-red-700">Delete</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
