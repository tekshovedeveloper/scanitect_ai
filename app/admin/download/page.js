'use client';

import React from 'react';
import { getAllEmail } from "@/utils/api";
// import ProtectedPageLayout from '@/app/admin/layout';
import styles from './download.module.css'


export default function DownloadSheetPage() {
  const handleDownload = async () => {
    try {
    //   const response = await fetch('http://localhost:4000/subscribe/allSubscriptionEmail');

    const response = await getAllEmail('subscribe/allSubscriptionEmail');
      if (!response.ok) {
        throw new Error('Failed to fetch emails');
      }
console.log("the email", response)
      const emails = response.data.data
    //   const json = await response.json();
    //   const emails = json.data;

      console.log("the email", response.data.data)

      let csv = 'email\n'; // header
    csv += emails.map(e => e.email).join('\n'); // each row

    // 📝 Create a CSV Blob
    const blob = new Blob([csv], { type: 'text/csv' });

    // 🔗 Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'emails.csv'; // 👈 filename
    link.click();

    // 🧹 Clean up
    URL.revokeObjectURL(url);
  
    } catch (error) {
      console.error('Download failed:', error);
      alert('Something went wrong!');
    }
  };

  return (
    //  <ProtectedPageLayout>
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <div className={styles.Downloadcontent}>
          <h1 className={styles.Downloadtitle}>
            Download <span className={styles.Downloadhighlight}>Email</span>{" "}
            Sheet
          </h1>
        </div>
      {/* <h1>Download Email Sheet</h1> */}
      <div className={styles.btnDiv}>

          <button
          className={styles.download_btn}
            onClick={handleDownload}
            
          >
            Download
          </button>
      </div>
    </div>
    // </ProtectedPageLayout>
  );
}
