

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9gq7SpSzAPPUhsYdYAbboODZtMUZ2vHI",
  authDomain: "react-chap.firebaseapp.com",
  projectId: "react-chap",
  storageBucket: "react-chap.appspot.com",
  messagingSenderId: "809571697755",
  appId: "1:809571697755:web:d89ee552b144677bbc6b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);