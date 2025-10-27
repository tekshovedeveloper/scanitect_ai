import React from "react";
import Image from "next/image";
import styles from "./guide_video_section.module.css";

export default function GuideVideoSection() {
  return (
  <section className={styles.guideVideoHero} id="guideVideo">
      <div className={styles.guideVideoContainer}>
        <video
          className={styles.video}
          src="/videos/Guide-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
