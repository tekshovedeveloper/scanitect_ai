import React from "react";
import Image from "next/image";
import styles from "./smart_Ai_built_section.module.css";

export default function SmartAIBuiltSection() {
  const steps = [
    {
      PowerfulStep: "Step 1",
      PowerfulTitle: "Computer Vision",
      PowerfulDesc:
        "Advanced CNN models for architectural feature detection ",
      iconSrc: "/image/computer_vision.svg",
    },
    {
      PowerfulStep: "Step 2",
      PowerfulTitle: "Machine Learning",
      PowerfulDesc: "Deep neural networks trained on millions of buildings ",
      iconSrc: "/image/machine_learning.svg",
    },
    {
      PowerfulStep: "Step 3",
      PowerfulTitle: "Knowledge Base",
      PowerfulDesc:
        "Comprehensive architectural, cultural and historical databases across the internet curated for tourists",
      iconSrc: "/image/knowledge_base.svg",
    },
  ];

  return (
    <section className={styles.PowerfulheroSection} id="technology">
      <div className={styles.Powerfulinner}>
        <div className={styles.Powerfulcontent}>
          <h1 className={styles.Powerfultitle}>
            Powered by{" "}
            <span className={styles.Powerfulhighlight}>Smart AI Built</span> for
            Travelers
          </h1>
          <p className={styles.Powerfulsubtitle}>
            Behind the scenes, we use advanced AI and huge databases from across
            the entire internet. For you, that means the most up-to-date,
            curated information in your hand…in an instant.
          </p>
        </div>
      </div>

      <div className={styles.PowerfulInner}>
        <div className={styles.PowerfulGrid}>
          {steps.map((s, index) => (
            <article key={s.PowerfulTitle} className={styles.PowerfulCard}>
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
