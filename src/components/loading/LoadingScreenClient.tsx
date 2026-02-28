"use client";

import { useEffect } from "react";
import styles from "./LoadingScreen.module.css";
import { LOADING_OVERLAY_ID } from "./LoadingOverlay";

export function LoadingScreenClient() {
  useEffect(() => {
    const overlay = document.getElementById(LOADING_OVERLAY_ID);
    if (!overlay) return;

    const fadeTimer = window.setTimeout(() => {
      overlay.classList.add(styles.fadeOut);
    }, 2000);

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== overlay || e.propertyName !== "opacity") return;
      overlay.remove();
      overlay.removeEventListener("transitionend", onTransitionEnd);
    };

    overlay.addEventListener("transitionend", onTransitionEnd);

    return () => {
      window.clearTimeout(fadeTimer);
      overlay.removeEventListener("transitionend", onTransitionEnd);
    };
  }, []);

  return null;
}
