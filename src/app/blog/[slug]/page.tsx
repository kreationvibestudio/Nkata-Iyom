import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

// Placeholder — replace with CMS fetch by slug
const placeholderPosts: Record<string, { title: string; excerpt: string; date: string; body: string }> = {
  welcome: {
    title: "Welcome to Our Blog",
    excerpt: "Stories and wisdom from our community.",
    date: "2025-02-26",
    body: "This is where we will share stories, cultural insights, and leadership wisdom from Nkata ndi Inyom Igbo. Content will be added as it becomes available.",
  },
  "cultural-preservation": {
    title: "The Importance of Cultural Preservation",
    excerpt: "Why passing on our traditions matters.",
    date: "2025-02-20",
    body: "Cultural preservation ensures that Igbo traditions, stories, and values are passed on to future generations. Through workshops and community events, we keep our heritage alive.",
  },
  "leadership-spotlight": {
    title: "Leadership Spotlight",
    excerpt: "Celebrating women who lead with integrity.",
    date: "2025-02-15",
    body: "We celebrate the women in our community who lead with integrity and wisdom. Their example inspires the next generation of leaders.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) notFound();

  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <Link href="/blog" className="text-sm font-medium text-accent-600 hover:text-accent-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <time className="text-sm text-brand-600" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            {post.title}
          </h1>
          <p className="mt-2 text-lg text-brand-700">{post.excerpt}</p>
        </div>
      </section>

      <Section>
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
