// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUow6Y3SZwDXO7Jiug-aKznMRRzcvZBvA",
    authDomain: "login-53940.firebaseapp.com",
    projectId: "login-53940",
    storageBucket: "login-53940.firebasestorage.app",
    messagingSenderId: "660914311091",
    appId: "1:660914311091:web:89301acd0347d1bbe6c5c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);