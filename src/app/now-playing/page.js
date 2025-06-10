'use client';
import React, { useEffect, useState } from 'react';
import { useMusic } from '@/context/MusicContext';
import styles from './NowPlaying.module.css';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';
import Link from 'next/link';

export default function NowPlaying() {
  const { currentTrack, isPlaying, setIsPlaying, volume, setVolume, audioRef } = useMusic();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleTimeUpdate = () => {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [audioRef, currentTrack]);

  if (!currentTrack) {
    return (
      <div className={styles.container}>
        <p>No track selected. Go to <Link href="/library">Library</Link> to play a song.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlur} style={{ backgroundImage: `url(${currentTrack.cover})` }}></div>

      <div className={styles.content}>
        <img src={currentTrack.cover} alt={currentTrack.title} className={styles.albumArt} />

        <div className={styles.trackInfo}>
          <h2>{currentTrack.title}</h2>
          <p>{currentTrack.artist}</p>
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
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>

        <Link href="/library" className={styles.backToLibrary}>← Back to Library</Link>
      </div>
    </div>
  );
}


