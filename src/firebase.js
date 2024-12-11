import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "coins-table-9f3de.firebaseapp.com",
  projectId: "coins-table-9f3de",
  storageBucket: "coins-table-9f3de.firebasestorage.app",
  messagingSenderId: "868218704890",
  appId: "1:868218704890:web:6cb02ea8fefea6d86f8a43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)