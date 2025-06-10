'use client';
import React, { useEffect, useState } from 'react';
import { useMusic } from '@/context/MusicContext';
import styles from './AlbumSongs.module.css';
import { useRouter } from 'next/navigation';

export default function AlbumSongs({ album, onBack }) {
  const { setCurrentTrack, setIsPlaying } = useMusic();
  const [tracks, setTracks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '4d3058093amshdea03c4793f9a2bp1f098ejsneb340477f5d7',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        };

        const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${album.id}`, options);
        const data = await res.json();

        setTracks(data.tracks.data);
      } catch (err) {
        console.error('Error fetching album tracks:', err);
      }
    };

    fetchTracks();
  }, [album.id]);

  const handlePlay = (track) => {
    setCurrentTrack({
      audio: track.preview,
      cover: album.cover_medium,
      artist: track.artist.name,
      title: track.title
    });
    setIsPlaying(true);

    setTimeout(() => {
      router.push('/now-playing');
    }, 100);
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onBack}>← Back to Albums</button>
      <h2 className={styles.albumTitle}>{album.title} - {album.artist?.name || 'Unknown Artist'}</h2>
      {tracks.map((track) => (
        <div key={track.id} className={styles.songCard}>
          <p className={styles.songName}>{track.title}</p>
          <button className={styles.playButton} onClick={() => handlePlay(track)}>Play Preview</button>
        </div>
      ))}
    </div>
  );
}
