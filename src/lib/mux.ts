import Mux from "@mux/mux-node";

export type VideoItem = {
  playbackId: string;
  assetId: string;
  duration: string;
  durationSeconds: number;
  createdAt: string | undefined;
};

export async function getVideos(): Promise<{ videos: VideoItem[]; error?: string }> {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  if (!tokenId || !tokenSecret) {
    return { videos: [] };
  }

  try {
    const mux = new Mux({ tokenId, tokenSecret });
    const { data: assets } = await mux.video.assets.list({ limit: 50 });

    const videos: VideoItem[] = assets
      .filter((asset) => asset.status === "ready" && asset.playback_ids?.[0]?.id)
      .map((asset) => {
        const playbackId = asset.playback_ids![0].id;
        const duration = asset.duration != null ? Math.round(asset.duration) : 0;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const durationFormatted = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        return {
          playbackId,
          assetId: asset.id,
          duration: durationFormatted,
          durationSeconds: duration,
          createdAt: asset.created_at,
        };
      })
      .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));

    return { videos };
  } catch (err) {
    console.error("Mux getVideos error:", err);
    return { videos: [], error: err instanceof Error ? err.message : "Failed to list videos" };
  }
}

/** Get playback ID for a specific asset ID. Returns null if asset is not ready or has no playback ID. */
export async function getPlaybackIdForAsset(assetId: string): Promise<string | null> {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  if (!tokenId || !tokenSecret) return null;

  try {
    const mux = new Mux({ tokenId, tokenSecret });
    const asset = await mux.video.assets.retrieve(assetId);
    if (asset?.status !== "ready" || !asset.playback_ids?.[0]?.id) return null;
    return asset.playback_ids[0].id;
  } catch (err) {
    console.error("Mux getPlaybackIdForAsset error:", err);
    return null;
  }
}
