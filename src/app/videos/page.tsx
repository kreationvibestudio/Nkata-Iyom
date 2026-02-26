import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Video Library",
  description:
    "Watch cultural content, talks, and events from Nkata ndi Inyom Igbo. Powered by Mux for reliable streaming.",
};

// Placeholder — replace with Mux + CMS metadata later
const placeholderVideos = [
  { id: "1", title: "Introduction to Nkata ndi Inyom Igbo", category: "About", duration: "5:00" },
  { id: "2", title: "Cultural Preservation in Practice", category: "Culture", duration: "12:00" },
  { id: "3", title: "Women in Leadership Panel", category: "Leadership", duration: "45:00" },
];

export default function VideosPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Video Library
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Cultural content, talks, and events. Member-only access and Mux streaming will be connected when videos are ready.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderVideos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
              className="group block rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-brand-300/60 transition-all duration-300"
            >
              <div className="aspect-video bg-brand-900/80 flex items-center justify-center relative">
                <span className="text-white/90 text-4xl">▶</span>
                <span className="absolute bottom-2 right-2 text-xs font-medium text-white/90 bg-black/50 px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">
                  {video.category}
                </span>
                <h2 className="mt-2 font-display text-display-sm text-brand-900 group-hover:text-accent-700 transition-colors">
                  {video.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
