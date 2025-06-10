import Link from 'next/link';
import styles from '../commonPage.module.css';

export default function TrendingPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Trending</h1>
      <p className={styles.pageDescription}>Explore the hottest tracks trending right now.</p>
      <Link href="/" className={styles.backButton}>← Back to Home</Link>
    </div>
  );
}

