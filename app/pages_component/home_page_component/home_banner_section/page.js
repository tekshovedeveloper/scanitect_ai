"use client";
import React, { useState } from "react";
import styles from "./home_banner.module.css";
import VideoModal from "../../../components/VideoModal"; // adjust path

export default function HomeBanner() {
  const [showDemo, setShowDemo] = useState(false);

  // Your ScreenPal embed (encode % as %25)
  const screenPalUrl =
    // "https://go.screenpal.com/player/cT6uDJnFnNw?width=100%25&height=100%25&ff=1&title=0";
    "https://go.screenpal.com/player/cTXhoInFumZ?width=100%&height=100%&ff=1&title=0";

  return (
    <div className={styles.outerContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.subtitle}>
            <span className={styles.gradientText}>Scan The Building</span>
          </h2>
          <h1 className={styles.title}>Discover The Story</h1>
          <p className={styles.description}>
            AI Powered travel companion app to satisfy your curiosity about
            whatever catches your eye. Spot an interesting landmark, building, or
            monument? Just scan what you see, and get background information, fun facts,
            recommendations, and stories.
          </p>

          <div className={styles.buttons}>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("subscribeForm")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Sign up for early access
            </button>

            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={(e) => {
                e.preventDefault();
                setShowDemo(true);
              }}
            >
              <span>▶</span> Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className={styles.heroSectionImage}>
        <img className={styles.desktopImage} src="/image/home-banner-image.png" alt="Desktop Banner" />
        <img className={styles.mobileImage} src="/image/home-banner-image-mobile.png" alt="Mobile Banner" />
      </div>

      <VideoModal
        open={showDemo}
        onClose={() => setShowDemo(false)}
        iframeSrc={screenPalUrl}
        title="Product Demo"
      />
    </div>
  );
}