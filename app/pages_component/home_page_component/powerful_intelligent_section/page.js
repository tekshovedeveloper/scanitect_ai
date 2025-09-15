import React from 'react';
import Image from "next/image";
import styles from './powerful_intelligent_section.module.css';




export default function PowerfulIntelligent() {


    const steps = [
  {
    PowerfulStep: "Step 1",
    PowerfulTitle: "Snap",
    PowerfulDesc:
      "Point your camera at any landmark or building around you, and instantly unlock its story, history, and travel details.",
    iconSrc: "/image/Snap.svg",
  },
  {
    PowerfulStep: "Step 2",
    PowerfulTitle: "Identify",
    PowerfulDesc:
      "Instantly see its name and story. Discover must‑know details and cultural insights. Get fun facts and tips for your visit.",
    iconSrc: "/image/Identify.svg",
  },
  {
    PowerfulStep: "Step 3",
    PowerfulTitle: "Explore",
    PowerfulDesc:
      "Quickly access tickets, tours, maps, opening hours, and other visiting details to make the most of your trip.",
     iconSrc: "/image/Explore.svg",
  },
];


  return (
    <section className={styles.PowerfulheroSection}>
      {/* <div className={styles.gridOverlay}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.gridLine}></div>
        ))}
      </div> */}
          <div className={styles.Powerfulinner}>

      <div className={styles.Powerfulcontent}>
        <h1 className={styles.Powerfultitle}>
          Simple <span className={styles.Powerfulhighlight}>Powerful</span> Intelligent
        </h1>
        <p className={styles.Powerfulsubtitle}>
         Three simple steps to unlock the architectural secrets of any building you encounter.
        </p>
      </div>
      </div>



       {/* <div className={styles.PowerfulWrapper} aria-label="How it works"> */}
    <div className={styles.PowerfulInner}>
  <div className={styles.PowerfulGrid}>
      {/* connector line (show only on middle card) */}
        {/* {index === 1 && ( */}
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
        {/* )} */}

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
    {/* </div> */}

    </section>
  );
}
