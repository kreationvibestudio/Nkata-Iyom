import { type ReactNode } from "react";

export type PageBannerVariant =
  | "offerings"
  | "blog"
  | "library"
  | "videos"
  | "events"
  | "contact"
  | "member"
  | "about";

const VARIANT_STYLES: Record<
  PageBannerVariant,
  { gradient: string; radialPosition: string }
> = {
  offerings: {
    gradient:
      "linear-gradient(152deg, #031530 0%, #0f3380 40%, #1549a8 75%, #257af8 100%)",
    radialPosition: "50% 50%",
  },
  blog: {
    gradient:
      "linear-gradient(160deg, #031530 0%, #0a2050 35%, #1a5fd4 68%, #4da6ff 100%)",
    radialPosition: "60% 45%",
  },
  library: {
    gradient:
      "linear-gradient(148deg, #031530 0%, #1549a8 45%, #257af8 85%, #80bfff 100%)",
    radialPosition: "40% 55%",
  },
  videos: {
    gradient:
      "linear-gradient(165deg, #0a2050 0%, #031530 25%, #1549a8 70%, #257af8 100%)",
    radialPosition: "55% 50%",
  },
  events: {
    gradient:
      "linear-gradient(155deg, #031530 0%, #0f3380 38%, #1a5fd4 72%, #4da6ff 100%)",
    radialPosition: "45% 52%",
  },
  contact: {
    gradient:
      "linear-gradient(158deg, #031530 0%, #0a2050 42%, #1549a8 78%, #257af8 100%)",
    radialPosition: "50% 48%",
  },
  member: {
    gradient:
      "linear-gradient(150deg, #020c1a 0%, #031530 30%, #0f3380 65%, #1a5fd4 100%)",
    radialPosition: "50% 55%",
  },
  about: {
    gradient:
      "linear-gradient(155deg, #031530 0%, #0a2050 35%, #4c1d95 70%, #7c3aed 100%)",
    radialPosition: "50% 55%",
  },
};

interface PageBannerProps {
  title: string;
  description?: ReactNode;
  variant?: PageBannerVariant;
}

export function PageBanner({
  title,
  description,
  variant = "offerings",
}: PageBannerProps) {
  const style = VARIANT_STYLES[variant];

  return (
    <section
      className="relative min-h-[180px] xs:min-h-[200px] sm:min-h-[220px] md:min-h-[260px] overflow-hidden flex flex-col justify-center"
      aria-label={title}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: style.gradient }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 z-[1] opacity-40"
        style={{
          background: `radial-gradient(ellipse 80% 70% at ${style.radialPosition}, rgba(124, 58, 237, 0.28) 0%, transparent 65%)`,
        }}
      />
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Title and description */}
      <div className="container-narrow relative z-[2] py-8 sm:py-12 md:py-14">
        <div className="max-w-2xl min-w-0">
          <h1 className="font-display text-xl sm:text-display-md md:text-display-lg text-white heading-balance font-semibold break-words">
            {title}
          </h1>
          {description && (
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-primary-100 leading-snug">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
