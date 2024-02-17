// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM4NPKdCxtBgP2HYN-Tf6t9DoDUFRVOMY",
  authDomain: "chat-app-de0c1.firebaseapp.com",
  projectId: "chat-app-de0c1",
  storageBucket: "chat-app-de0c1.appspot.com",
  messagingSenderId: "304188032475",
  appId: "1:304188032475:web:6d7bb540493a3535b0d3fe",
  measurementId: "G-CGCMGE2892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);