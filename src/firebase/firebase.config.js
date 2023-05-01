// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi3jpbOmx2BlU7ZxWmniDVFAM-i8q0BtE",
  authDomain: "the-news-dragon-48feb.firebaseapp.com",
  projectId: "the-news-dragon-48feb",
  storageBucket: "the-news-dragon-48feb.appspot.com",
  messagingSenderId: "137645432611",
  appId: "1:137645432611:web:1cbecd061808d99351f696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app