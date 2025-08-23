// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VXu5LmD8uNNMLcpd032BUDdhRkYVvy0",
  authDomain: "ticker-7c89f.firebaseapp.com",
  projectId: "ticker-7c89f",
  storageBucket: "ticker-7c89f.firebasestorage.app",
  messagingSenderId: "117289276181",
  appId: "1:117289276181:web:18999221dd7f924d7ecf1c",
  measurementId: "G-2LWLZ34SWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("✅ Firebase Initialized:", app.name); 


export  {app};