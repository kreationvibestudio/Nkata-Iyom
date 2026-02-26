import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

// Placeholder — replace with CMS/catalog fetch by id
const placeholderBooks: Record<string, { title: string; category: string; description: string }> = {
  "1": {
    title: "Igbo Traditions & Values",
    category: "Culture",
    description: "An introduction to core Igbo traditions and their significance. This resource is part of our cultural preservation efforts.",
  },
  "2": {
    title: "Women in Leadership",
    category: "Leadership",
    description: "Stories and guidance for women stepping into leadership roles within the community.",
  },
  "3": {
    title: "Community and Conflict Resolution",
    category: "Community",
    description: "Wisdom on mediation and strengthening community bonds.",
  },
};

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = placeholderBooks[id];
  if (!book) notFound();

  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <Link href="/library" className="text-sm font-medium text-accent-600 hover:text-accent-700 mb-4 inline-block">
            ← Back to Bookshelf
          </Link>
          <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">{book.category}</span>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            {book.title}
          </h1>
          <p className="mt-2 text-brand-700">{book.description}</p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl">
          <div className="aspect-[3/4] max-w-xs mx-auto rounded-xl bg-brand-100/50 flex items-center justify-center text-brand-600">
            [Book cover / reader placeholder]
          </div>
          <p className="mt-6 text-brand-600 text-sm text-center">
            In-app reader and member-only access will be wired when content is ready.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/library" variant="outline">
              Back to Bookshelf
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
