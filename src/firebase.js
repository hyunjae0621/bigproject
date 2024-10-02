import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_WfYT17UjsxlRZSR4CT0-QRnvxfvHMNY",
  authDomain: "bigproject-c7330.firebaseapp.com",
  projectId: "bigproject-c7330",
  storageBucket: "bigproject-c7330.appspot.com",
  messagingSenderId: "620678970244",
  appId: "1:620678970244:web:43de11cdb4419a1b167bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app); 