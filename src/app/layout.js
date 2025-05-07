import '../styles/globals.css';
import { MusicProvider } from '../context/MusicContext';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MusicProvider>
          <Navbar />
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

