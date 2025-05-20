// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzSFKCziiaK3r_vFO8va0ZKncCx_7O-8",
  authDomain: "b11-a10-client.firebaseapp.com",
  projectId: "b11-a10-client",
  storageBucket: "b11-a10-client.firebasestorage.app",
  messagingSenderId: "1080417766872",
  appId: "1:1080417766872:web:045963b19074236ccef6ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);