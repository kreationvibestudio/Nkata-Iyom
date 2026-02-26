import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Bookshelf",
  description:
    "Browse our digital library of books and resources on Igbo culture, leadership, and community.",
};

// Placeholder — replace with CMS/catalog data later
const placeholderBooks = [
  { id: "1", title: "Igbo Traditions & Values", category: "Culture", description: "An introduction to core Igbo traditions and their significance." },
  { id: "2", title: "Women in Leadership", category: "Leadership", description: "Stories and guidance for women stepping into leadership roles." },
  { id: "3", title: "Community and Conflict Resolution", category: "Community", description: "Wisdom on mediation and strengthening community bonds." },
];

export default function LibraryPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Bookshelf
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Our digital library of books and resources. Members can browse by category and read in-browser where available.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderBooks.map((book) => (
            <article
              key={book.id}
              className="group rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-brand-300/60 transition-all duration-300"
            >
              <div className="aspect-[3/4] bg-brand-100/50 flex items-center justify-center text-brand-600 text-sm">
                [Cover]
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">
                  {book.category}
                </span>
                <h2 className="mt-2 font-display text-display-sm text-brand-900 group-hover:text-accent-700 transition-colors">
                  {book.title}
                </h2>
                <p className="mt-2 text-brand-700 text-sm leading-relaxed">{book.description}</p>
                <Link
                  href={`/library/${book.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700"
                >
                  View / Read
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
