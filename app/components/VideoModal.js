// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import styles from "../../styles/VideoModal.module.css";

// /*
//   Props:
//   - open: boolean
//   - onClose: () => void
//   - videoSrc?: string   // local/hosted mp4
//   - youtubeId?: string  // YouTube video ID
//   - autoPlay?: boolean
//   - title?: string
// */
// export default function VideoModal({
//   open,
//   onClose,
//   videoSrc,
//   youtubeId,
//   autoPlay = true,
//   title = "Demo video",
// }) {
//   const [mounted, setMounted] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => setMounted(true), []);

//   // Close on ESC + lock scroll
//   useEffect(() => {
//     if (!open) return;

//     const onKeyDown = (e) => {
//       if (e.key === "Escape") onClose?.();
//     };
//     window.addEventListener("keydown", onKeyDown);

//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       document.body.style.overflow = prevOverflow;
//     };
//   }, [open, onClose]);

//   // Stop/reset HTML5 video on unmount
//   useEffect(() => {
//     return () => {
//       if (videoRef.current) {
//         try {
//           videoRef.current.pause();
//           videoRef.current.currentTime = 0;
//         } catch {}
//       }
//     };
//   }, []);

//   if (!mounted || !open) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) onClose?.();
//   };

//   return createPortal(
//     <div
//       className={styles.backdrop}
//       onClick={handleBackdropClick}
//       role="dialog"
//       aria-modal="true"
//       aria-label={title}
//     >
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <button className={styles.close} aria-label="Close" onClick={onClose}>
//           ×
//         </button>

//         {youtubeId ? (
//           <iframe
//             className={styles.media}
//             src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${
//               autoPlay ? 1 : 0
//             }&rel=0&modestbranding=1`}
//             title={title}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           />
//         ) : (
//           <video
//             ref={videoRef}
//             className={styles.media}
//             src={videoSrc}
//             controls
//             autoPlay={autoPlay}
//             playsInline
//           />
//         )}
//       </div>
//     </div>,
//     document.body
//   );
// }














"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
 import styles from "../../styles/VideoModal.module.css";

export default function VideoModal({
  open,
  onClose,
  videoSrc,     // optional (HTML5 video)
  youtubeId,    // optional (YouTube)
  iframeSrc,    // optional (generic iframe embed e.g. ScreenPal)
  autoPlay = true,
  title = "Demo video",
  poster,
}) {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Stop/reset HTML5 video on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch {}
      }
    };
  }, []);

  if (!mounted || !open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} aria-label="Close" onClick={onClose}>×</button>

        {iframeSrc ? (
          <iframe
            className={styles.media}
            src={iframeSrc}
            title={title}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="eager"
            style={{ border: 0 }}
          />
        ) : youtubeId ? (
          <iframe
            className={styles.media}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&mute=1&rel=0&modestbranding=1`}
            title={title}
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.media}
            src={videoSrc}
            controls
            autoPlay={autoPlay}
            muted={autoPlay}
            preload="auto"
            playsInline
            poster={poster}
          />
        )}
      </div>
    </div>,
    document.body
  );
}