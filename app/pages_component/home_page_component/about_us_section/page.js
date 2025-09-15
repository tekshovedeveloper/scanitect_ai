import react from 'react';
import styles from './about_us_section.module.css';






export default function AboutUs() {
  return (

    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Left copy */}
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Made for <span className={styles.accent}>Modern</span><br /> Explorers
          </h1>

          <p className={styles.lead}>
            Scanticet instantly identifies landmarks and shares their stories.Get 
            tickets, tours, and visiting hours—anywhere you explore.
            
          </p>

          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.dot} /> Instantly recognize landmarks and buildings
            </li>
            <li className={styles.item}>
              <span className={styles.dot} /> Get cultural & historic insights in seconds
            </li>
            <li className={styles.item}>
              <span className={styles.dot} /> Explore nearby attractions and visiting tips
            </li>
          </ul>
        </div>

        {/* Right preview */}
         <div className={styles.wrap}>
      {/* back cards */}
      <div className={styles.cardStack}>
      <div className={`${styles.card} ${styles.backOne}`} aria-hidden>
         <header className={styles.header}>
          <span className={styles.badge} aria-hidden>⚡</span>
          <h3 className={styles.cardTitle}>Deep Insight</h3>
        </header>

        <p className={styles.body}>
          Advanced computer vision identifies architectural styles, historical periods,
          and building types within seconds.
        </p>
      </div>


      <div className={`${styles.card} ${styles.backTwo}`} aria-hidden>
          <header className={styles.header}>
          <span className={styles.badge} aria-hidden>⚡</span>
          <h3 className={styles.cardTitle}>Lighting Fast</h3>
        </header>

        <p className={styles.body}>
          Advanced computer vision identifies architectural styles, historical periods,
          and building types within seconds.
        </p>
        </div> 


      {/* front / primary card */}
      <article className={`${styles.card} ${styles.front}`} tabIndex={0}>
        <header className={styles.header}>
          <span className={styles.badge} aria-hidden>⚡</span>
          <h3 className={styles.cardTitle}>Instant Recognition</h3>
        </header>

        <p className={styles.body}>
          Advanced computer vision identifies architectural styles, historical periods,
          and building types within seconds.
        </p>
      </article>

      </div>
    </div>




      </div>
    </section>




  );
}