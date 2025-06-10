import Link from 'next/link';
import styles from '../commonPage.module.css';

export default function PlaylistsPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Playlists</h1>
      <p className={styles.pageDescription}>Your personalized playlists and curated mixes.</p>
      <Link href="/" className={styles.backButton}>← Back to Home</Link>
    </div>
  );
}
