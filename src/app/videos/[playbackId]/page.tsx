import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { MuxPlayerWrapper } from "@/components/video/MuxPlayer";

export default async function VideoWatchPage({
  params,
}: {
  params: Promise<{ playbackId: string }>;
}) {
  const { playbackId } = await params;
  if (!playbackId) notFound();

  return (
    <>
      <section className="section-padding bg-primary-50/80 border-b border-brand-200">
        <div className="container-narrow">
          <Link
            href="/videos"
            className="text-sm font-medium text-primary-500 hover:text-primary-600 mb-4 inline-block"
          >
            ← Back to Video Library
          </Link>
          <h1 className="font-display text-display-lg text-brand-900 heading-balance mt-2">
            Video
          </h1>
        </div>
      </section>

      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden bg-brand-900 [&_mux-player]:min-h-full [&_mux-player]:min-w-full">
            <MuxPlayerWrapper playbackId={playbackId} />
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
