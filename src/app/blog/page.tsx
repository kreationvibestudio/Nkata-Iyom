import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Blog",
  description:
    "Stories, cultural insights, leadership advice, and updates from Nkata ndi Inyom Igbo.",
};

// Placeholder posts — replace with CMS data later
const placeholderPosts = [
  { slug: "welcome", title: "Welcome to Our Blog", excerpt: "Stories and wisdom from our community.", date: "2025-02-26" },
  { slug: "cultural-preservation", title: "The Importance of Cultural Preservation", excerpt: "Why passing on our traditions matters.", date: "2025-02-20" },
  { slug: "leadership-spotlight", title: "Leadership Spotlight", excerpt: "Celebrating women who lead with integrity.", date: "2025-02-15" },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Stories, cultural insights, leadership advice, and updates from our community.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-brand-300/60 transition-all duration-300"
            >
              <div className="aspect-video bg-brand-100/50 flex items-center justify-center text-brand-600 text-sm">
                [Image]
              </div>
              <div className="p-6">
                <time className="text-sm text-brand-600" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-2 font-display text-display-sm text-brand-900 group-hover:text-accent-700 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-brand-700 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
