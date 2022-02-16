import { useEffect, useState } from 'react';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import { auth } from '../firebase';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        router.push('/login');
      }
    });
  }, []);

  return (authenticated || router.pathname === '/login') && <Component {...pageProps} />;
}

export default MyApp;
