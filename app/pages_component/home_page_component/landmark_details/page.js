import React from 'react';
import Image from "next/image";
import styles from './landmark_details.module.css';




export default function LandmarkDetails () {


   

  return (
      <div className={styles.wrapper}>
      <div className={styles.main_div}>
        <div className={styles.glassCard}>
          <div className={styles.content}>
            <h1>
              Get <span className={styles.highlight}>Landmark</span> Details Instantly
            </h1>
            <p>
              Access building information in just a few clicks. From property details and 
              ownership records to floor plans and compliance reports—everything is instant, 
              reliable, and hassle-free.
            </p>
            <div className={styles.storeButtons}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
              />
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store" 
              />
            </div>
          </div>
          <div className={styles.phoneMock}>
            <img 
              src="/image/phone_image.svg" 
              alt="Phone Mockup"
              className={styles.phone_image}/>
          </div>

      </div>
        
      </div>

      
    </div>
  );
}
