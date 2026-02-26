import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

// Placeholder — replace with Mux playback ID + CMS metadata
const placeholderVideos: Record<string, { title: string; category: string; duration: string; description: string }> = {
  "1": {
    title: "Introduction to Nkata ndi Inyom Igbo",
    category: "About",
    duration: "5:00",
    description: "A short introduction to our mission and community.",
  },
  "2": {
    title: "Cultural Preservation in Practice",
    category: "Culture",
    duration: "12:00",
    description: "How we preserve and pass on Igbo traditions.",
  },
  "3": {
    title: "Women in Leadership Panel",
    category: "Leadership",
    duration: "45:00",
    description: "A panel discussion on women in leadership roles.",
  },
};

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = placeholderVideos[id];
  if (!video) notFound();

  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <Link href="/videos" className="text-sm font-medium text-accent-600 hover:text-accent-700 mb-4 inline-block">
            ← Back to Video Library
          </Link>
          <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">{video.category}</span>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            {video.title}
          </h1>
          <p className="mt-2 text-brand-700">{video.description}</p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl bg-brand-900 flex items-center justify-center text-white/80">
            [Mux player placeholder — connect playback ID when videos are ready]
          </div>
          <div className="mt-6 flex justify-center">
            <ButtonLink href="/videos" variant="outline">
              Back to Video Library
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
