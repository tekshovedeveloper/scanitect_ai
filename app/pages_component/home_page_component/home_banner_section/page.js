"use client";
import react from "react";
import styles from "./home_banner.module.css";

export default function HomeBanner() {
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

            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <span>▶</span> Watch Demo
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.heroSectionImage}>
      <img src="/image/home-banner-image.png" /> 
      </div> */}
       {/* <div className={styles.heroSectionImage}></div> */}
       {/* <img src="" /> */}
       <div className={styles.heroSectionImage}>
  <img className={styles.desktopImage} src="/image/home-banner-image.png" alt="Desktop Banner" />
  <img className={styles.mobileImage} src="/image/home-banner-image-mobile.png" alt="Mobile Banner" />
</div>
    </div>
  );
}
