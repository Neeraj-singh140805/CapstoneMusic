import Link from 'next/link';
import styles from '../commonPage.module.css';

export default function LikedSongsPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Liked Songs</h1>
      <p className={styles.pageDescription}>Songs you liked and saved to your collection.</p>
      <Link href="/" className={styles.backButton}>← Back to Home</Link>
    </div>
  );
}
