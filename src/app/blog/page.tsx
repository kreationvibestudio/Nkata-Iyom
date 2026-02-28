import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Stories, cultural insights, leadership advice, and updates from Nkata Ndi Inyom Igbo.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageBanner
        variant="blog"
        title="Blog"
        description="Stories, cultural insights, leadership advice, and updates from our community."
      />

      <Section variant="muted">
        {posts.length === 0 ? (
          <p className="text-brand-600 max-w-2xl">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-w-0">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-brand-300/60 transition-all duration-300"
              >
                <div className="aspect-video bg-brand-100/50 flex items-center justify-center text-brand-600 text-sm">
                  [Image]
                </div>
                <div className="p-4 sm:p-6 min-w-0">
                  <time className="text-sm text-brand-600" dateTime={post.created_at}>
                    {new Date(post.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-brand-700 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt || "Read more…"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
