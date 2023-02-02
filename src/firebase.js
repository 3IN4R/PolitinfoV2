// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxgIOc1_iexkH97557qnAPr03C2a2inIQ",
  authDomain: "politinfo-47210.firebaseapp.com",
  projectId: "politinfo-47210",
  storageBucket: "politinfo-47210.appspot.com",
  messagingSenderId: "357447725414",
  appId: "1:357447725414:web:36383c958fe08b7679d8a7",
  measurementId: "G-3E9TFYX79S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export{db}
export {analytics}