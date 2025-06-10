
import Link from 'next/link';
import styles from '../commonPage.module.css';

export default function FeedPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Feed</h1>
      <p className={styles.pageDescription}>Discover the latest music and curated playlists on your Feed.</p>
      <Link href="/" className={styles.backButton}>← Back to Home</Link>
    </div>
  );
}
