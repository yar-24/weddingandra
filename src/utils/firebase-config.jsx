import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtOlXwPEQWI0_qnYwfkUH-dvOcc78spZY",
  authDomain: "undangin-de968.firebaseapp.com",
  projectId: "undangin-de968",
  storageBucket: "undangin-de968.appspot.com",
  messagingSenderId: "810809237823",
  appId: "1:810809237823:web:5142bb0294b1861a5ff38a",
  measurementId: "G-W69LFYCEST"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
