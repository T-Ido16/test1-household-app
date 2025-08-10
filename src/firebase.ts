// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMtbeOpxUIN-pKdkMMLv3xH1umQYIhOE",
  authDomain: "householdtypescript-2d802.firebaseapp.com",
  projectId: "householdtypescript-2d802",
  storageBucket: "householdtypescript-2d802.firebasestorage.app",
  messagingSenderId: "948286999929",
  appId: "1:948286999929:web:9766ee2916cf80690673a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };