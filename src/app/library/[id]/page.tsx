import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { getBookById } from "@/lib/books";

export const dynamic = "force-dynamic";

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBookById(id);
  if (!book) notFound();

  return (
    <>
      <section className="section-padding bg-primary-50/80 border-b border-brand-200">
        <div className="container-narrow">
          <Link href="/library" className="text-sm font-medium text-primary-500 hover:text-primary-600 mb-4 inline-block">
            ← Back to Bookshelf
          </Link>
          <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">{book.category}</span>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            {book.title}
          </h1>
          <p className="mt-2 text-brand-700">{book.description}</p>
        </div>
      </section>

      <Section variant="muted">
        <div className="max-w-2xl">
          <div className="aspect-[3/4] max-w-xs mx-auto rounded-xl bg-brand-100/50 flex items-center justify-center text-brand-600 overflow-hidden">
            {book.cover_url ? (
              <Image
                src={book.cover_url}
                alt=""
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>[Book cover / reader placeholder]</span>
            )}
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
