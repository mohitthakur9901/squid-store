// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbeEQa5SepJgqrwunRJCNJJhsA9Wy6v44",
  authDomain: "squidstore-f6f04.firebaseapp.com",
  projectId: "squidstore-f6f04",
  storageBucket: "squidstore-f6f04.appspot.com",
  messagingSenderId: "269856511981",
  appId: "1:269856511981:web:0dc689bd2fa2cca35bf9e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);