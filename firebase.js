// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLaKbu-7G1pIB85u3O9HR-DGyH8bIUkOE',
  authDomain: 'next-lessn.firebaseapp.com',
  databaseURL: 'https://next-lessn-default-rtdb.firebaseio.com',
  projectId: 'next-lessn',
  storageBucket: 'next-lessn.appspot.com',
  messagingSenderId: '404898074537',
  appId: '1:404898074537:web:fa53eaa7145e0ade98feb8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, provider, auth, signInWithPopup };
