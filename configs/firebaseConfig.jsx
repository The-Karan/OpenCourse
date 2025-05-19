import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "opencourse-22e68.firebaseapp.com",
  projectId: "opencourse-22e68",
  storageBucket: "opencourse-22e68.firebasestorage.app",
  messagingSenderId: "862053220090",
  appId: "1:862053220090:web:5dabcc5ed113927eb71343",
  measurementId: "G-HVQ224YGG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };
