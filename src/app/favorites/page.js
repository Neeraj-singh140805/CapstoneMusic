import Link from 'next/link';
import styles from '../commonPage.module.css';

export default function FavoritesPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Favorites</h1>
      <p className={styles.pageDescription}>Your favorite tracks and playlists, all in one place.</p>
      <Link href="/" className={styles.backButton}>← Back to Home</Link>
    </div>
  );
}

