// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp0LQNN2X6QcashO9uRZVx84xIxMw7Mc0",
  authDomain: "login-test-39cda.firebaseapp.com",
  projectId: "login-test-39cda",
  storageBucket: "login-test-39cda.firebasestorage.app",
  messagingSenderId: "819044680200",
  appId: "1:819044680200:web:9b1d916dda910705c0c7bd",
  measurementId: "G-KEGF1YMN5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);