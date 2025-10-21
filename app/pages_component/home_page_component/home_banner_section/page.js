"use client";
import react from "react";
import styles from "./home_banner.module.css";

export default function HomeBanner() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.subtitle}>
            <span className={styles.gradientText}>Scan The City</span>
          </h2>
          <h1 className={styles.title}>Discover The Story</h1>
          <p className={styles.description}>
            AI-powered travel companion to help you Instantly identify
            landmarks, discover interesting facts and plan your next stop….all
            without missing a moment.
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
       <div className={styles.heroSectionImage}></div>
    </div>
  );
}
