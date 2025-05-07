'use client';
import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [library] = useState([
    { title: 'Sunshine Dreams', artist: 'DJ Wave', cover: 'track1.jpg', audio: 'track1.mp3' },
    { title: 'Night Owl', artist: 'Luna Beats', cover: 'track2.jpg', audio: 'track2.mp3' },
  ]);
  const [currentTrack, setCurrentTrack] = useState(library[0]);
  const [volume, setVolume] = useState(50);

  return (
    <MusicContext.Provider value={{ library, currentTrack, setCurrentTrack, volume, setVolume }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}

