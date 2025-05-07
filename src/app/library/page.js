// src/app/library/page.js

'use client';  // Add this line to mark the file as a client component

import React, { useState } from 'react';
import styles from './Library.module.css'; // Import the CSS module
import { FaSearch } from 'react-icons/fa'; // Search Icon

// Dummy album data (you can replace this with actual data)
const albums = [
  {
    id: 1,
    name: 'Album One',
    artist: 'Artist One',
    cover: 'pic4 copy.jpg',
  },
  {
    id: 2,
    name: 'Album Two',
    artist: 'Artist Two',
    cover: 'pic5 copy.png',
  },
  {
    id: 3,
    name: 'Album Three',
    artist: 'Artist Three',
    cover: 'pic6 copy.jpg',
  },
  {
    id: 4,
    name: 'Album Four',
    artist: 'Artist Four',
    cover: 'pic7 copy.jpg',
  },
  {
    id: 5,
    name: 'Album Five',
    artist: 'Artist Five',
    cover: 'pic8 copy.jpg',
  },
  {
    id: 6,
    name: 'Album Six',
    artist: 'Artist Six',
    cover: 'pic9 copy.jpg',
  },
  {
    id: 7,
    name: 'Album Seven',
    artist: 'Artist Seven',
    cover: 'pic10 copy.jpg',
  },
  {
    id: 8,
    name: 'Album Eight',
    artist: 'Artist Eight',
    cover: 'pic11 copy.jpg',
  },
  {
    id: 9,
    name: 'Album Nine',
    artist: 'Artist Nine',
    cover: 'pic12 copy.jpg',
  },
  {
    id: 10,
    name: 'Album Ten',
    artist: 'Artist Ten',
    cover: 'pic13 copy.jpg',
  },
  {
    id: 11,
    name: 'Album Eleven',
    artist: 'Artist Eleven',
    cover: 'pic14 copy.jpg',
  },
  {
    id: 12,
    name: 'Album Twelve',
    artist: 'Artist Twelve',
    cover: 'pic15 copy.jpg',
  },
  {
    id: 13,
    name: 'Album Thirteen',
    artist: 'Artist Thirteen',
    cover: 'pic16 copy.jpg',
  },
  {
    id: 14,
    name: 'Album Fourteen',
    artist: 'Artist Fourteen',
    cover: 'pic17 copy.jpg',
  },
  {
    id: 15,
    name: 'Album Fifteen',
    artist: 'Artist Fifteen',
    cover: 'pic18 copy.jpg',
  }
  // Add more albums here...
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Music Library</h1>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search albums..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Album Grid */}
      <div className={styles.albumGrid}>
        {filteredAlbums.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <img
              src={album.cover}
              alt={album.name}
              className={styles.albumCover}
            />
            <div className={styles.albumInfo}>
              <h2 className={styles.albumName}>{album.name}</h2>
              <p className={styles.albumArtist}>{album.artist}</p>
            </div>
            <button className={styles.playButton}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}
