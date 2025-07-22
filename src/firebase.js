// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZCrF68fD89L1ToAhx9thMGAU-UIVhpLo",
  authDomain: "all-rs.firebaseapp.com",
  projectId: "all-rs",
  storageBucket: "all-rs.firebasestorage.app",
  messagingSenderId: "568999824322",
  appId: "1:568999824322:web:4f7157d4437e7d6aa6e45b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
