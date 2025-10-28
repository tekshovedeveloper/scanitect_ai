import react from "react";
import styles from "./about_us_section.module.css";

export default function AboutUs() {
  return (
    <section className={styles.hero} id="features">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Made for <span className={styles.accent}>Modern</span>
            <br /> Explorers
          </h1>

          <p className={styles.lead}>
            ScanitectAI is redefining what it means to be a tourist.
          </p>

          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.firstItem}`}>
              <span className={styles.dot} />
              Your interests: Not a generic packaged tour
            </li>
            <li className={`${styles.item} ${styles.secondItem}`}>
              <span className={styles.dot} /> Real-time discovery: Suggestions
              and recommendations of interesting things nearby
            </li>
            <li className={`${styles.item} ${styles.thirdItem}`}>
              <span className={styles.dot} /> Instantly satisfy your curiosity:
              No need to research or read a tourbook
            </li>
          </ul>
        </div>

        <div className={styles.wrap}>
          <div className={styles.cardStack}>
            <div className={`${styles.card} ${styles.backOne}`} aria-hidden>
              <header className={styles.header}>
                <span className={styles.badge} aria-hidden>
                  <img
                    src="/image/back-one-card.svg"
                    alt=""
                    className={styles.icon}
                  />
                </span>
                <h3 className={styles.cardTitle}>
                  Deep Insights
                </h3>
              </header>

              <p className={styles.body}>
                Comprehensive analysis including architectural details, historical context, and cultural significance.
              </p>
            </div>

            <div className={`${styles.card} ${styles.backTwo}`} aria-hidden>
              <header className={styles.header}>
                <span className={styles.badge} aria-hidden>
                  <img
                    src="/image/back-two-card.svg"
                    alt=""
                    className={styles.icon}
                  />
                </span>
                <h3 className={styles.cardTitle}>Lighting Fast</h3>
              </header>

              <p className={styles.body}>
               Optimized Al models deliver comprehensive building analysis in under 3 seconds, perfect for real-time exploration.
              </p>
            </div>

            <article className={`${styles.card} ${styles.front}`} tabIndex={0}>
              <header className={styles.header}>
                <span className={styles.badge} aria-hidden>
                  <img
                    src="/image/front-card.svg"
                    alt=""
                    className={styles.icon}
                  />
                </span>
                <h3 className={styles.cardTitle}>Instant Recognition</h3>
              </header>

              <p className={styles.body}>Advanced computer vision identifies architectural styles, historical periods, and building types within seconds.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
