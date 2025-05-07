'use client';

export default function TrackList({ tracks }) {
  return (
    <ul>
      {tracks.map((track, idx) => (
        <li key={idx} onClick={() => alert(`Now playing: ${track.title}`)}>
          <img src={`/assets/${track.cover}`} alt={track.title} width="50" />
          <p>{track.title} - {track.artist}</p>
        </li>
      ))}
    </ul>
  );
}
