// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfll-IWECmgwGUf83o1s4Wzs-3LWvqAK8",
  authDomain: "laugifirebase.firebaseapp.com",
  projectId: "laugifirebase",
  storageBucket: "laugifirebase.firebasestorage.app",
  messagingSenderId: "535343474185",
  appId: "1:535343474185:web:84b25c256055e6170a3ad8",
  measurementId: "G-6WSB2RL8VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);