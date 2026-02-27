import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { getVideos } from "@/lib/mux";

export const metadata = {
  title: "Video Library",
  description:
    "Watch cultural content, talks, and events from Nkata ndi Inyom Igbo. Powered by Mux for reliable streaming.",
};

export const dynamic = "force-dynamic";

export default async function VideosPage() {
  const { videos } = await getVideos();

  return (
    <>
      <PageBanner
        variant="videos"
        title="Video Library"
        description="Cultural content, talks, and events. Powered by Mux for reliable streaming."
      />

      <Section variant="muted">
        {videos.length === 0 ? (
          <div className="rounded-xl border border-brand-200 bg-surface-muted/50 p-10 text-center text-brand-600">
            <p className="font-medium">No videos yet</p>
            <p className="mt-2 text-sm">
              Add <code className="rounded bg-brand-200/60 px-1.5 py-0.5 text-xs">MUX_TOKEN_SECRET</code> to{" "}
              <code className="rounded bg-brand-200/60 px-1.5 py-0.5 text-xs">.env.local</code>, then upload videos in the{" "}
              <a href="https://dashboard.mux.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                Mux dashboard
              </a>{" "}
              to see them here.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Link
                key={video.playbackId}
                href={`/videos/${video.playbackId}`}
                className="group block rounded-xl border border-brand-200/60 bg-surface overflow-hidden hover:shadow-lg hover:border-primary-200/60 transition-all duration-300"
              >
                <div className="aspect-video bg-brand-900 relative">
                  <img
                    src={`https://image.mux.com/${video.playbackId}/thumbnail.jpg?width=640&fit_mode=smartcrop`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl">
                      ▶
                    </span>
                  </span>
                  <span className="absolute bottom-2 right-2 text-xs font-medium text-white/90 bg-black/50 px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
                    Video
                  </h2>
                  <p className="mt-1 text-sm text-brand-600">{video.duration} long</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
