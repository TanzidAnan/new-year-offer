// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzn9Rbfg2OL1t0xE7LGHIgsUgae7UTVI4",
  authDomain: "data-auth-project.firebaseapp.com",
  projectId: "data-auth-project",
  storageBucket: "data-auth-project.firebasestorage.app",
  messagingSenderId: "196976097490",
  appId: "1:196976097490:web:3b075484ae116a44cfd50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
