// app/privacy-policy/page.js  (or pages/privacy-policy.js)

import styles from './privacy-policy.module.css';

export const metadata = {
  title: 'Privacy Policy',
};

const APP_NAME = 'Scanitect AI';
const DEVELOPER_NAME = 'Scanitect';
const LAST_UPDATED = '2025-01-01';
const CONTACT_EMAIL = 'support@scanitectai.com';

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.privacyPage}>
      <h1 className={styles.title}>Privacy Policy – {APP_NAME}</h1>
      <p className={styles.meta}>
        <strong>Last updated:</strong> {LAST_UPDATED}
      </p>

      <p>
        {DEVELOPER_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the mobile
        application <strong>{APP_NAME}</strong> (&quot;App&quot;). This Privacy Policy explains how
        we collect, use, and protect information when you use the App. By using the App, you agree
        to the collection and use of information in accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Photos and image content</h3>
      <p>
        When you use the App to take a photo, the photo is captured using your device&apos;s camera
        (with your permission). The photo is uploaded to our backend server, which then sends the
        image to Google Cloud Vision API to analyze it and return information such as object names,
        labels, or text. We receive these results and show them to you in the App.
      </p>
      <p>
        Photos are stored on our servers only as long as necessary to process them and provide
        results to you, after which they are deleted.
      </p>

      <h3>1.2 Result data</h3>
      <p>
        From Google Cloud Vision API, we receive analysis results such as labels, object names, or
        detected text from your photo. We may store these results to provide the service and to
        improve the App.
      </p>

      <h3>1.3 Device and usage data</h3>
      <p>We may automatically collect basic technical information, such as:</p>
      <ul>
        <li>Device model, operating system version, and app version</li>
        <li>Log data (time of request, error logs, and performance data)</li>
      </ul>
      <p>This information is used only to operate and improve the App and to diagnose issues.</p>

      <h3>1.4 Other information you provide</h3>
      <p>
        If you contact us for support or feedback, we may receive your email address and any other
        information you choose to provide.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide the main feature of the App: analyzing photos and showing you the results</li>
        <li>Operate, maintain, and improve the App and our services</li>
        <li>Diagnose and fix technical problems, and protect against abuse and fraud</li>
        <li>Communicate with you about the App when you contact us</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal information.</p>

      <h2>3. Third‑Party Services (Google Cloud Vision API)</h2>
      <p>
        To analyze the photos you send, we use <strong>Google Cloud Vision API</strong>, a service
        provided by Google LLC. Your photos are sent from our server to Google&apos;s servers for
        processing. Google processes the image and returns labels or text to us.
      </p>
      <p>
        Google&apos;s use of data is governed by Google&apos;s own privacy policy:{' '}
        <a
          className={styles.link}
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/privacy
        </a>
        .
      </p>

      <h2>4. Data Storage and Retention</h2>
      <p>
        We keep photos on our servers only as long as necessary to process them and return results
        to you. After processing is complete, photos are deleted from our servers.
      </p>
      <p>
        We may retain non‑image data such as analysis results and log data for a longer period to
        operate and improve the App, comply with legal obligations, and resolve disputes.
      </p>

      <h2>5. Legal Basis (EEA/UK Users)</h2>
      <p>
        If you are located in the European Economic Area (EEA) or the United Kingdom, we process
        your information based on:
      </p>
      <ul>
        <li>Your <strong>consent</strong> (for using the camera and processing your photos)</li>
        <li>
          Our <strong>legitimate interests</strong> in operating, maintaining, and improving the
          App
        </li>
      </ul>
      <p>
        You may withdraw your consent at any time by disabling camera access in your device
        settings, but some features of the App will no longer work.
      </p>

      <h2>6. Sharing of Information</h2>
      <p>We may share information in the following situations:</p>
      <ul>
        <li>
          With service providers who help us operate the App (such as hosting providers and Google
          Cloud Vision API), only as necessary for them to perform services on our behalf.
        </li>
        <li>
          When required by law, regulation, or legal process, or to protect our rights, property,
          or safety.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> share your photos or personal data with third parties for their
        own marketing purposes.
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information,
        including transmitting data over secure connections (HTTPS) and restricting access to our
        servers. However, no method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>8. Your Choices and Rights</h2>
      <p>You can:</p>
      <ul>
        <li>
          Control camera access by changing app permissions in your device settings. If you disable
          the camera, some features of the App will not work.
        </li>
        <li>
          Contact us to request access to, or deletion of, personal data we store about you, subject
          to legal requirements.
        </li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        The App is not directed to children under 13 (or the relevant minimum age in your country),
        and we do not knowingly collect personal information from children. If you believe that a
        child has provided us with personal information, please contact us so we can remove it.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated &quot;Last updated&quot; date. Your continued use of the App after any
        changes means you accept the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions or concerns, contact us at:</p>
      <p>
        <strong>Email:</strong>{' '}
        <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </main>
  );
}