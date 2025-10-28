'use client';

import { useEffect, useRef, useState } from 'react';
import '../globals.css'
export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowConn = !!connection && ['slow-2g', '2g', '3g'].includes(connection.effectiveType);

    const lowMem = navigator.deviceMemory && navigator.deviceMemory <= 2;

    // Pick a smaller source on small screens 
    const w = window.innerWidth;
    let pick = '/videos/bg-480p.mp4';
    if (w >= 1024) pick = '/videos/bg-1080p.mp4';
    else if (w >= 640) pick = '/videos/bg-480p.mp4';
    setSrc(pick);

    // Only play for capable devices
    if (!prefersReducedMotion && !slowConn && !lowMem) {
      setShouldPlay(true);
    }
  }, []);

  if (!shouldPlay) {
    // Fallback static background
    return <div className="backgroundImage" aria-hidden="true" />;
  }

  return (
    <video
      ref={videoRef}
      className="backgroundVideo"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/videos/bg-poster.jpg"
      src={src} id="bg-video"
    />
  );
}