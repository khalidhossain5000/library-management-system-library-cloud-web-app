// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3FkQcJHVuUh4Ml5-Rd4VCt3GXV7kj-vo",
  authDomain: "assignment-11-library-m-system.firebaseapp.com",
  projectId: "assignment-11-library-m-system",
  storageBucket: "assignment-11-library-m-system.firebasestorage.app",
  messagingSenderId: "603232403957",
  appId: "1:603232403957:web:cb68b8fca9ada9b23260bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);