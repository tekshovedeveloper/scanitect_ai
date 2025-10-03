import React from 'react';
import styles from './contact_us.module.css';

export default function ContactUs() {
  return (
    <div className={styles.wrapper} id='contactUs'>

    <div className={styles.main_div}>
        <div className={styles.glassCard}>
        <form className={styles.form}>
          <h1 className={styles.Powerfultitle}>
            Get in<span className={styles.Powerfulhighlight}> Touch</span>
          </h1>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>

    </div>
      
    </div>
  );
}
