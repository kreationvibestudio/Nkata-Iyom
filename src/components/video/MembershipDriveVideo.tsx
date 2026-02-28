"use client";

import { MuxPlayerWrapper } from "./MuxPlayer";

interface MembershipDriveVideoProps {
  playbackId?: string | null;
}

export function MembershipDriveVideo({ playbackId }: MembershipDriveVideoProps) {
  if (!playbackId) {
    return (
      <div className="aspect-video rounded-xl bg-brand-100/50 border border-brand-200 flex items-center justify-center text-brand-600">
        <p className="text-center px-4">
          Add <code className="rounded bg-brand-200/60 px-1.5 py-0.5 text-sm">MUX_MEMBERSHIP_DRIVE_PLAYBACK_ID</code> to{" "}
          <code className="rounded bg-brand-200/60 px-1.5 py-0.5 text-sm">.env.local</code> to display the membership drive video.
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-brand-900 [&_mux-player]:min-h-full [&_mux-player]:min-w-full">
      <MuxPlayerWrapper playbackId={playbackId} title="Membership Drive" />
    </div>
  );
}
