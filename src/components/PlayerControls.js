'use client';
import { useMusic } from '../context/MusicContext';

export default function PlayerControls() {
  const { currentTrack, setCurrentTrack } = useMusic();

  const nextTrack = () => {
    const next = (currentTrack + 1) % 2; 
    setCurrentTrack(next);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={nextTrack}>Next</button>
      <button>Play/Pause</button>
    </div>
  );
}
