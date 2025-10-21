import React from "react";
import Image from "next/image";
import styles from "./smart_AI_travel.module.css";

export default function SmartAiTravel() {
  return (
    <section className={styles.smartAiTravelHero}>
      <div className={styles.smartAiTravelContainer}>
        <div className={styles.smartAiTravelHeroGrid}>
          <figure className={styles.smartAiTravelMedia}>
            <img
              src="/image/smartAiTravel.png"
              alt="A landmark photographed with a phone"
              priority
              className={styles.smartAiTravelMediaImg}
            />
            <div className={styles.smartAiTravelOverlay}>
              <div className={styles.smartAiTravelOverlayStack}>
                <a className={styles.smartAiTravelGlassBtn} href="#tickets">
                  Buy Tickets
                </a>
                <a className={styles.smartAiTravelGlassBtn} href="#hours">
                  Opening Hours
                </a>
                <a className={styles.smartAiTravelGlassBtn} href="#nearby">
                  Things To Do Nearby
                </a>
              </div>
            </div>
          </figure>

          <div className={styles.smartAiTravelCopy}>
            <h1>
              Your Smart{" "}
              <span className={styles.smartAiTravelAccent}>AI Travel</span>{" "}
              Companion
            </h1>

            <ul className={styles.smartAiTravelChecklist}>
              <li>Instantly recognize landmarks and uncover their history</li>
              <li>Discover cultural stories, fun facts, and local insights</li>
              <li>Access tickets, tours, and visiting details in seconds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
