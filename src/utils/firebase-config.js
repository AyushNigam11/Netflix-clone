// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBJy9ZTCIJXW-Jf1C8t9d1eMNmbh7Jy3RQ",
  authDomain: "react-netflix-clone-ec45c.firebaseapp.com",
  projectId: "react-netflix-clone-ec45c",
  storageBucket: "react-netflix-clone-ec45c.appspot.com",
  messagingSenderId: "215190421083",
  appId: "1:215190421083:web:64ab7f0311b7929a6e497e",
  measurementId: "G-W3SW673H07"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 