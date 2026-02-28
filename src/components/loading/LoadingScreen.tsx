"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen() {
  const [isFading, setIsFading] = useState(false);
  const [isInDOM, setIsInDOM] = useState(true);
  const isFadingRef = useRef(false);
  isFadingRef.current = isFading;

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsFading(true), 2000);
    return () => window.clearTimeout(fadeTimer);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "opacity") return;
    if (isFadingRef.current) setIsInDOM(false);
  };

  if (!isInDOM) return null;

  return (
    <div
      className={`${styles.overlay} ${isFading ? styles.fadeOut : ""}`}
      onTransitionEnd={handleTransitionEnd}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={styles.dancerWrap}>
        <Image
          src="/loading-dancer.png"
          alt=""
          width={320}
          height={400}
          className={styles.dancer}
          priority
          unoptimized={false}
        />
      </div>
    </div>
  );
}
