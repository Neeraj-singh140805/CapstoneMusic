'use client';
import React, { useState, useEffect } from 'react';
import styles from './Library.module.css';
import AlbumSongs from './AlbumSongs';

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setAlbums([]);
      return;
    }

    const fetchAlbums = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '4d3058093amshdea03c4793f9a2bp1f098ejsneb340477f5d7', // 👈 paste your RapidAPI key here
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        };

        const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, options);
        const data = await res.json();

        // Extract unique albums:
        const uniqueAlbums = [];
        const seenAlbumIds = new Set();

        for (const track of data.data) {
          if (!seenAlbumIds.has(track.album.id)) {
            seenAlbumIds.add(track.album.id);
            uniqueAlbums.push(track.album);
          }
        }

        setAlbums(uniqueAlbums);

      } catch (err) {
        console.error('Error fetching albums:', err);
      }
    };

    fetchAlbums();
  }, [searchQuery]);

  if (selectedAlbum) {
    return <AlbumSongs album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Music Library (Deezer API)</h1>
      <input
        type="text"
        placeholder="Search artist..."
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className={styles.albumGrid}>
        {albums.map((album) => (
          <div key={album.id} className={styles.albumCard} onClick={() => setSelectedAlbum(album)}>
            <img src={album.cover_medium} alt={album.title} className={styles.albumCover} />
            <h2>{album.title}</h2>
            <p>{album.artist?.name || 'Unknown Artist'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
