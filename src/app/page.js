// src/app/home/page.js
import React from 'react';
import styles from './Home.module.css'; // Import the CSS module for styling

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Music Player</h1> {/* Apply the 'title' class here */}
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h2>Feed</h2>
          <img src='pic copy.jpg' className='img'></img>
          <p>Discover new tracks and playlists</p>
        </div>
        <div className={styles.box}>
          <h2>Trending</h2>
          <img src='pic1 copy.jpg' className='img1'></img>
          <p>Check out the latest trending music</p>
        </div>
        <div className={styles.box}>
          <h2>Favorites</h2>
          <img src='pic2 copy.jpg' className='img2'></img>
          <p>Your favorite tracks and playlists</p>

        </div>
        <div className={styles.box}>
          <h2>Liked Songs</h2>
          <img src='pic3 copy.jpg' className='img3'></img>
          <p>The Songs you Liked!</p>
        </div>
        <div className={styles.box}>
          <h2>Playlists</h2>
          <img src='pic19 copy.jpg' className='img3'></img>
          <p>The Songs you Liked!</p>
        </div>
      </div>
    </div>
  );
}
