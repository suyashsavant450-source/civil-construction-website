import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-_xv9CFkW5uD7D1aPfCeRjzKE2IzG5M8",
  authDomain: "sai-builders-website.firebaseapp.com",
  projectId: "sai-builders-website",
  storageBucket: "sai-builders-website.firebasestorage.app",
  messagingSenderId: "1017524680933",
  appId: "1:1017524680933:web:5992519adc0252bb1f7c0c",
  measurementId: "G-7B383SWK3M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;