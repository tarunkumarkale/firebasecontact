// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz9O0AFiq2RZij7_cgMRKgUJ6bgQpaJQQ",
  authDomain: "contact-3c836.firebaseapp.com",
  projectId: "contact-3c836",
  storageBucket: "contact-3c836.appspot.com",
  messagingSenderId: "218266158014",
  appId: "1:218266158014:web:77341e1d0ba5b765e26fef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);