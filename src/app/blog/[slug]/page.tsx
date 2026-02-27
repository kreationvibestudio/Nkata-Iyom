import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { getBlogPostBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="section-padding bg-primary-50/80 border-b border-brand-200">
        <div className="container-narrow">
          <Link href="/blog" className="text-sm font-medium text-primary-500 hover:text-primary-600 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <time className="text-sm text-brand-600" dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-2 text-lg text-brand-700">{post.excerpt}</p>
          )}
        </div>
      </section>

      <Section variant="muted">
        <article className="max-w-2xl prose prose-brand">
          <div className="text-brand-700 leading-relaxed whitespace-pre-line">
            {post.body}
          </div>
        </article>
        <div className="mt-10">
          <ButtonLink href="/blog" variant="outline">
            Back to Blog
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
