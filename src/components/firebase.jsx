// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEoBji24G-nZUbvrtqXnAPUsW_6LI8hmE",
  authDomain: "react-mini-auth.firebaseapp.com",
  projectId: "react-mini-auth",
  storageBucket: "react-mini-auth.appspot.com",
  messagingSenderId: "214251264851",
  appId: "1:214251264851:web:deaab53714c4d25e8b9fa6",
  measurementId: "G-RHLM1Y39WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 
const analytics = getAnalytics(app);