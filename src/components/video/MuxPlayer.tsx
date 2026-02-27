"use client";

import MuxPlayer from "@mux/mux-player-react";

interface MuxPlayerWrapperProps {
  playbackId: string;
  title?: string;
  className?: string;
}

export function MuxPlayerWrapper({ playbackId, title, className = "" }: MuxPlayerWrapperProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      metadata={{ video_title: title }}
      className={className}
    />
  );
}
