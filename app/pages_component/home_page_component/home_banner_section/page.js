import react from 'react';
import styles from './home_banner.module.css';






export default function HomeBanner() {
  return (

    <div className={styles.outerContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.subtitle}>
            <span className={styles.gradientText}>AI-Powered</span>
          </h2>
          <h1 className={styles.title}>Travel Companion</h1>
          <p className={styles.description}>
            Explore the world smarter. Instantly identify landmarks, discover hidden stories, and plan your next stop all while traveling.
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Get Notified
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <span>▶</span> Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroSectionImage}>
           <img src='/image/home-banner-image.png' />
      </div>
    </div>




  );
}