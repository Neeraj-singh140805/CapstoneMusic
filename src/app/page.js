'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Music Player</h1>
      <div className={styles.boxContainer}>
        <Link href="/feed" className={styles.link}>
          <div className={styles.box}>
            <img src="pic copy.jpg" alt="Feed" />
            <h2>Feed</h2>
            <p>Discover new tracks and playlists</p>
          </div>
        </Link>
        <Link href="/trending" className={styles.link}>
          <div className={styles.box}>
            <img src="pic1 copy.jpg" alt="Trending" />
            <h2>Trending</h2>
            <p>Check out the latest trending music</p>
          </div>
        </Link>
        <Link href="/favorites" className={styles.link}>
          <div className={styles.box}>
            <img src="pic2 copy.jpg" alt="Favorites" />
            <h2>Favorites</h2>
            <p>Your favorite tracks and playlists</p>
          </div>
        </Link>
        <Link href="/liked-songs" className={styles.link}>
          <div className={styles.box}>
            <img src="pic3 copy.jpg" alt="Liked Songs" />
            <h2>Liked Songs</h2>
            <p>The Songs you Liked!</p>
          </div>
        </Link>
        <Link href="/playlists" className={styles.link}>
          <div className={styles.box}>
            <img src="pic19 copy.jpg" alt="Playlists" />
            <h2>Playlists</h2>
            <p>Your personalized playlists and curated mixes.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
