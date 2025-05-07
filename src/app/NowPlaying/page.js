'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';
import styles from './NowPlaying.module.css';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Fake progress bar animation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlur}></div>

      <div className={styles.content}>
        <img
          src="/album-art.jpg" // Place a real image in public folder
          alt="Album Art"
          className={styles.albumArt}
        />

        <div className={styles.trackInfo}>
          <h2>Blinding Lights</h2>
          <p>The Weeknd · After Hours</p>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
        </div>

        <div className={styles.controls}>
          <button><FaStepBackward /></button>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button><FaStepForward /></button>
        </div>

        <div className={styles.volume}>
          <FaVolumeUp />
          <input type="range" min="0" max="100" />
        </div>
      </div>
    </div>
  );
}
