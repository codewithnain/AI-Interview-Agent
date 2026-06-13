// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-832ea.firebaseapp.com",
  projectId: "interviewiq-832ea",
  storageBucket: "interviewiq-832ea.firebasestorage.app",
  messagingSenderId: "82681936305",
  appId: "1:82681936305:web:b6df866b7aaaae8105e590",
  measurementId: "G-Y5HF1BTXP9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();