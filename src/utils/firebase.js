// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2VXu5LmD8uNNMLcpd032BUDdhRkYVvy0",
  authDomain: "ticker-7c89f.firebaseapp.com",
  projectId: "ticker-7c89f",
  storageBucket: "ticker-7c89f.firebasestorage.app",
  messagingSenderId: "117289276181",
  appId: "1:117289276181:web:18999221dd7f924d7ecf1c",
  measurementId: "G-2LWLZ34SWZ"
};


const app = initializeApp(firebaseConfig);

console.log("✅ Firebase Initialized:", app.name); 


export  {app};