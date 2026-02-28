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
      overlay.setAttribute("aria-hidden", "true");
    }, 2000);

    return () => window.clearTimeout(fadeTimer);
  }, []);

  return null;
}
