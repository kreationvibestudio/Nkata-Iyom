import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { getBooks } from "@/lib/books";

export const metadata = {
  title: "Bookshelf",
  description:
    "Browse our digital library of books and resources on Igbo culture, leadership, and community.",
};

export const dynamic = "force-dynamic";

export default async function LibraryPage() {
  const books = await getBooks();

  return (
    <>
      <PageHero
        title="Bookshelf"
        description="Our digital library of books and resources. Members can browse by category and read in-browser where available."
      />

      <Section variant="muted">
        {books.length === 0 ? (
          <p className="text-brand-600 max-w-2xl">
            No books in the library yet. Check back soon or contact us to suggest titles.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <article
                key={book.id}
                className="group rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-brand-300/60 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-brand-100/50 flex items-center justify-center text-brand-600 text-sm overflow-hidden">
                  {book.cover_url ? (
                    <Image
                      src={book.cover_url}
                      alt=""
                      width={400}
                      height={533}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>[Cover]</span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">
                    {book.category}
                  </span>
                  <h2 className="mt-2 font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
                    {book.title}
                  </h2>
                  <p className="mt-2 text-brand-700 text-sm leading-relaxed line-clamp-3">
                    {book.description}
                  </p>
                  <Link
                    href={`/library/${book.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
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
        )}
      </Section>
    </>
  );
}
