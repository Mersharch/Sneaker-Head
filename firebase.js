// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDf4vA8bYQkTNtdaiZCac3QN9_sujsnN7U",
    authDomain: "sneakerhead-5fddd.firebaseapp.com",
    projectId: "sneakerhead-5fddd",
    storageBucket: "sneakerhead-5fddd.appspot.com",
    messagingSenderId: "770011654565",
    appId: "1:770011654565:web:913462adce13c0f02c204c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


