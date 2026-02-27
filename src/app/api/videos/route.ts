import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

export const dynamic = "force-dynamic";

export async function GET() {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  if (!tokenId || !tokenSecret) {
    return NextResponse.json(
      { videos: [], error: "Mux credentials not configured. Add MUX_TOKEN_ID and MUX_TOKEN_SECRET to .env.local" },
      { status: 200 }
    );
  }

  try {
    const mux = new Mux({ tokenId, tokenSecret });
    const { data: assets } = await mux.video.assets.list({ limit: 50 });

    const videos = assets
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
          filename: asset.id, // Mux doesn't always expose filename; we could use passthrough later
        };
      })
      .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));

    return NextResponse.json({ videos });
  } catch (err) {
    console.error("Mux list assets error:", err);
    return NextResponse.json(
      { videos: [], error: err instanceof Error ? err.message : "Failed to list videos" },
      { status: 200 }
    );
  }
}
