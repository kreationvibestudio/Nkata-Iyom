"use client";

import Image from "next/image";

const PORTRAITS = [
  "/about/josephine-anenih-150x150-6c3925d4-8187-4fc2-812c-218cc1512999.png",
  "/about/justice-ukeje-150x150-6e4235b9-e92a-44b7-81df-c1f5b60c9838.png",
  "/about/prof-joy-ezeilo-150x150-42c428f2-11b9-44dc-94b7-197dbe0c1683.png",
  "/about/Dr.-Grace-Okudo-150x150-5b702980-92a9-488b-a7c3-fced0662f3c4.png",
  "/about/Dr.-Ann-Okigbo-150x150-f7ebbc46-8f70-424a-be14-cfc0cfeb8617.png",
  "/about/H.-E.-Regina-Amadi-Njoku-150x150-d4ff800c-f96b-4164-b75b-45c5cbf7e108.png",
  "/about/H.-E.-Prof-Uche-Azikiwe-150x150-cde06f24-cd32-4570-8487-dfa035689977.png",
  "/about/amb-nkem-anyawu-150x150-f0153a6e-b605-4884-bf76-76b49be3cde9.png",
] as const;

// Portraits sit in the area below the title bar (no overlap with text)
// floatDelay staggers the bounce so they don't move in sync
const POSITIONS: {
  left: string;
  top: string;
  size: string;
  delay: number;
  floatDelay: number;
  floatDuration: number;
}[] = [
  { left: "4%", top: "12%", size: "clamp(70px, 12vw, 110px)", delay: 0, floatDelay: 0, floatDuration: 4.5 },
  { left: "20%", top: "5%", size: "clamp(80px, 14vw, 130px)", delay: 80, floatDelay: 0.5, floatDuration: 5 },
  { left: "40%", top: "8%", size: "clamp(90px, 16vw, 150px)", delay: 160, floatDelay: 1, floatDuration: 4.8 },
  { left: "60%", top: "6%", size: "clamp(75px, 13vw, 120px)", delay: 240, floatDelay: 1.5, floatDuration: 5.2 },
  { left: "78%", top: "14%", size: "clamp(70px, 12vw, 110px)", delay: 320, floatDelay: 0.3, floatDuration: 4.6 },
  { left: "10%", top: "48%", size: "clamp(75px, 13vw, 120px)", delay: 100, floatDelay: 0.8, floatDuration: 5.4 },
  { left: "36%", top: "44%", size: "clamp(85px, 15vw, 140px)", delay: 200, floatDelay: 1.2, floatDuration: 4.4 },
  { left: "66%", top: "46%", size: "clamp(72px, 12vw, 115px)", delay: 280, floatDelay: 0.6, floatDuration: 5.1 },
];

export function AboutBanner() {
  return (
    <section
      className="relative min-h-[420px] xs:min-h-[460px] sm:min-h-[500px] md:min-h-[560px] overflow-hidden flex flex-col"
      aria-label="About Us"
    >
      {/* Gradient background: deep navy to primary blue */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(155deg, #031530 0%, #0a2050 35%, #1549a8 70%, #257af8 100%)",
        }}
      />
      {/* Soft radial glow for depth */}
      <div
        className="absolute inset-0 z-[1] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(8, 106, 254, 0.25) 0%, transparent 60%)",
        }}
      />
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Title bar at top – no overlap with portraits */}
      <div className="relative z-[3] shrink-0 border-b border-white/15 bg-brand-900/95 backdrop-blur-sm">
        <div className="container-narrow py-5 sm:py-6 px-5 sm:px-8">
          <h1 className="font-display text-xl sm:text-display-md md:text-display-lg text-white heading-balance font-semibold break-words">
            About Us
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-primary-100 leading-snug max-w-2xl">
            Our story, our founder, and our commitment to Igbo RoundTable
            conversations, shared leadership, and partnering for development.
          </p>
        </div>
      </div>

      {/* Portrait cluster – fills space below title; no text overlay */}
      <div className="relative flex-1 min-h-[320px] z-[2] flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl h-full min-h-[320px]">
          {PORTRAITS.map((src, i) => {
            const pos = POSITIONS[i];
            return (
              <div
                key={src}
                className="absolute rounded-full overflow-hidden border-2 border-white/30 shadow-xl animate-fade-in-up"
                style={{
                  left: pos.left,
                  top: pos.top,
                  width: pos.size,
                  height: pos.size,
                  animation: `fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pos.delay}ms forwards, floatBounce ${pos.floatDuration}s ease-in-out ${pos.floatDelay + 1.4}s infinite`,
                }}
              >
                <Image
                  src={src}
                  alt=""
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 110px, 150px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
