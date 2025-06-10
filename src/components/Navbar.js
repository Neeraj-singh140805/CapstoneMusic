'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link href="/">Home</Link>
      <Link href="/library">Library</Link>
      <Link href="/nowplaying">NowPlaying</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}
