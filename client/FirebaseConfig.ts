// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwlYL-l5W2EV4YWkMIbRNTpcQYsyP7BeU",
  authDomain: "lifescape-3e235.firebaseapp.com",
  projectId: "lifescape-3e235",
  storageBucket: "lifescape-3e235.appspot.com",
  messagingSenderId: "180584187152",
  appId: "1:180584187152:web:b55a76dca14bcff5e95195",
  measurementId: "G-7S4Q526KKJ",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH };
