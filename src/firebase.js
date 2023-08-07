// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgLnV9v_Rg_AR93P8UIj18o2ZNQGd8vk",
  authDomain: "clone-b0816.firebaseapp.com",
  projectId: "clone-b0816",
  storageBucket: "clone-b0816.appspot.com",
  messagingSenderId: "341473645992",
  appId: "1:341473645992:web:b0fde1425583af3b1af99d",
  measurementId: "G-923QW73YXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);