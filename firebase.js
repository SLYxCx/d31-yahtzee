// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCALqhGCWuQBMC0uNn7Xc7q6qo37rNSeR0",
  authDomain: "mobile-login-a419d.firebaseapp.com",
  projectId: "mobile-login-a419d",
  storageBucket: "mobile-login-a419d.firebasestorage.app",
  messagingSenderId: "191245771222",
  appId: "1:191245771222:web:72c3e20838bbad0b8bc477",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



