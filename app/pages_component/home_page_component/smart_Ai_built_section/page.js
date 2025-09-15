import React from 'react';
import Image from "next/image";
import styles from './smart_Ai_built_section.module.css';




export default function SmartAIBuiltSection() {


    const steps = [
  {
    PowerfulStep: "Step 1",
    PowerfulTitle: "Computer Vision",
    PowerfulDesc:
      "Advanced CNN models for architectural feature detection",
    iconSrc: "/image/computer_vision.svg",
  },
  {
    PowerfulStep: "Step 2",
    PowerfulTitle: "Machine Learning",
    PowerfulDesc:
      "Deep neural networks trained on millions of buildings",
    iconSrc: "/image/machine_learning.svg",
  },
  {
    PowerfulStep: "Step 3",
    PowerfulTitle: "Knowledge Base",
    PowerfulDesc:
      "Comprehensive architectural and historical databases",
     iconSrc: "/image/knowledge_base.svg",
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
          Powered by <span className={styles.Powerfulhighlight}>Smart AI Built</span> for Travelers 
        </h1>
        <p className={styles.Powerfulsubtitle}>
        Behind the scenes, we use advanced AI and huge databases. For you, it simply means easy
        landmark recognition, trusted cultural insights, and hassle-free trip planning.
        </p>
      </div>
      </div>



       {/* <div className={styles.PowerfulWrapper} aria-label="How it works"> */}
    <div className={styles.PowerfulInner}>
  <div className={styles.PowerfulGrid}>
     

    {steps.map((s, index) => (
      <article key={s.PowerfulTitle} className={styles.PowerfulCard}>
      

        {/* <div className={styles.PowerfulBadge}>
          <span>{s.PowerfulStep}</span>
        </div> */}

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
