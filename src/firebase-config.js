
import { initializeApp } from "firebase/app";
import {getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf6kPZAmCeEzhO8-NdcgawiU0knh_rrqw",
  authDomain: "loginapi-86b16.firebaseapp.com",
  projectId: "loginapi-86b16",
  storageBucket: "loginapi-86b16.appspot.com",
  messagingSenderId: "687291704632",
  appId: "1:687291704632:web:955b89f4ea1a97908bcdcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);