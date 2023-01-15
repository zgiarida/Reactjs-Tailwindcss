// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIcZwpgvKBAxU1MLVdvUL2ireiCj9bqI",
  authDomain: "ladziz-cakes-react.firebaseapp.com",
  projectId: "ladziz-cakes-react",
  storageBucket: "ladziz-cakes-react.appspot.com",
  messagingSenderId: "23390446137",
  appId: "1:23390446137:web:ce61a0ef36d34b178963e8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
