// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVdMNYRrYFoAXLlZd0dOvyGOD20I_X3A",
  authDomain: "react-auth-app-6ee70.firebaseapp.com",
  projectId: "react-auth-app-6ee70",
  storageBucket: "react-auth-app-6ee70.appspot.com",
  messagingSenderId: "262506978168",
  appId: "1:262506978168:web:c34e497021b6e792d5068d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export default app;