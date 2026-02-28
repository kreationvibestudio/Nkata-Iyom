import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const LOADING_OVERLAY_ID = "loading-overlay";

export function LoadingOverlay() {
  return (
    <div
      id={LOADING_OVERLAY_ID}
      className={styles.overlay}
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
        />
      </div>
    </div>
  );
}

export { LOADING_OVERLAY_ID };
