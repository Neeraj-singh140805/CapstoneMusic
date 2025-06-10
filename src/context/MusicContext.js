'use client';
import { createContext, useContext, useRef, useState, useEffect } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [albums] = useState([
    {
      name: 'Album One',
      artist: 'Artist One',
      cover: 'pic4 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Two',
      artist: 'Artist Two',
      cover: 'pic5 copy.png',
      songs: [
        { title: 'Track A', audio: 'track2 copy.mp3' },
        { title: 'Track B', audio: 'trackB.mp3' },
      ],
    },
    {
      name: 'Album three',
      artist: 'Artist One',
      cover: 'pic6 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Four',
      artist: 'Artist One',
      cover: 'pic7 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Five',
      artist: 'Artist One',
      cover: 'pic8 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Six',
      artist: 'Artist One',
      cover: 'pic9 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Seven',
      artist: 'Artist One',
      cover: 'pic10 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Eight',
      artist: 'Artist One',
      cover: 'pic11 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Nine',
      artist: 'Artist One',
      cover: 'pic12 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Ten',
      artist: 'Artist One',
      cover: 'pic13 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Eleven',
      artist: 'Artist One',
      cover: 'pic14 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Twelve',
      artist: 'Artist One',
      cover: 'pic15 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Thirteen',
      artist: 'Artist One',
      cover: 'pic16 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Fourteen',
      artist: 'Artist One',
      cover: 'pic17 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
    {
      name: 'Album Fifteen',
      artist: 'Artist One',
      cover: 'pic18 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
        {
      name: 'Album sixteen',
      artist: 'Artist One',
      cover: 'pic19 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },
          {
      name: 'Album seventeen',
      artist: 'Artist One',
      cover: 'pic20 copy.jpg',
      songs: [
        { title: 'Track 1', audio: 'track1 copy.mp3' },
        { title: 'Track 2', audio: '' },
      ],
    },


  ]);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying && currentTrack) {
        audioRef.current.play().catch((err) => console.error('Play error', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack, volume]);

  return (
    <MusicContext.Provider value={{
      albums,
      currentTrack,
      setCurrentTrack,
      isPlaying,
      setIsPlaying,
      volume,
      setVolume,
      audioRef
    }}>
      {children}
      <audio ref={audioRef} src={currentTrack?.audio} />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}

