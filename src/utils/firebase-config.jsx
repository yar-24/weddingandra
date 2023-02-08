import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCJHGpBzKz_6NC7XdPyM1Niv58onLd0CE",
  authDomain: "andrawedding-fad02.firebaseapp.com",
  projectId: "andrawedding-fad02",
  storageBucket: "andrawedding-fad02.appspot.com",
  messagingSenderId: "450637372788",
  appId: "1:450637372788:web:f7c99f96873bde0e36a021"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
