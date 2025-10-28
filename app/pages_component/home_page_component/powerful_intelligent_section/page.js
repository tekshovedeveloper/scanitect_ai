import React from "react";
import Image from "next/image";
import styles from "./powerful_intelligent_section.module.css";

export default function PowerfulIntelligent() {
  const steps = [
    {
      PowerfulStep: "Step 1",
      PowerfulTitle: "Snap",
      PowerfulDesc:
        "Point your camera at any landmark or building that intrigues you ",
      iconSrc: "/image/Snap.svg",
    },
    {
      PowerfulStep: "Step 2",
      PowerfulTitle: "Identify",
      PowerfulDesc:
        "Instantly see its name and story. Discover historical, architectural, cultural and current-day facts.",
      iconSrc: "/image/Identify.svg",
    },
    {
      PowerfulStep: "Step 3",
      PowerfulTitle: "Explore",
      PowerfulDesc:
        "Quickly access tickets, tours, opening hours and get recommendations of other places of interest nearby ",
      iconSrc: "/image/Explore.svg",
    },
  ];

  return (
    <section className={styles.PowerfulheroSection} id="howItsWork">
      <div className={styles.Powerfulinner}>
        <div className={styles.Powerfulcontent}>
          <h1 className={styles.Powerfultitle}>
            Simple <span className={styles.Powerfulhighlight}>Powerful</span>{" "}
            Intelligent
          </h1>
          <p className={styles.Powerfulsubtitle}>
            Three simple steps to answer the question <span className={styles.MainText}>I wonder what that
            building is?</span>
          </p>
        </div>
      </div>

      <div className={styles.PowerfulInner}>
        <div className={styles.PowerfulGrid}>
          <div className={styles.BadgeConnector} aria-hidden="true">
            <img
              src="/image/connector-left.svg"
              alt=""
              className={styles.BadgeConnectorLeft}
              loading="lazy"
            />
            <img
              src="/image/connector-right.svg"
              alt=""
              className={styles.BadgeConnectorRight}
              loading="lazy"
            />
          </div>

          {steps.map((s, index) => (
            <article key={s.PowerfulTitle} className={styles.PowerfulCard}>
              <div className={styles.PowerfulBadge}>
                <span>{s.PowerfulStep}</span>
              </div>

              <div aria-hidden className={styles.PowerfulIconBox}>
                <span className={styles.PowerfulEmoji}>
                  <img src={s.iconSrc} alt={`${s.PowerfulTitle} icon`} />
                </span>
              </div>

              <h3 className={styles.PowerfulTitle}>{s.PowerfulTitle}</h3>
              <p className={styles.PowerfulText}>{s.PowerfulDesc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
