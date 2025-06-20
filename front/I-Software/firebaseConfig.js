// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1fr_oDI6ABpk5yT-_zBZnGfR5KDr2M6Y",
  authDomain: "ing-soft-b5bc1.firebaseapp.com",
  projectId: "ing-soft-b5bc1",
  storageBucket: "ing-soft-b5bc1.firebasestorage.app",
  messagingSenderId: "1034794640839",
  appId: "1:1034794640839:web:a13a54c855329ca99b25e2",
  measurementId: "G-WNKJGQVBVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };