// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6fd35.firebaseapp.com",
  projectId: "mern-auth-6fd35",
  storageBucket: "mern-auth-6fd35.appspot.com",
  messagingSenderId: "344835380158",
  appId: "1:344835380158:web:14cc06fd3a52b294631fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);