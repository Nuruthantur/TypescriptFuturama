// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY as string,
  authDomain: import.meta.env.AUTHDOMAIN as string,
  projectId: import.meta.env.PROJECTID as string,
  storageBucket: import.meta.env.STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID as string,
  appId: import.meta.env.APPID as string
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);