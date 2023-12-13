// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAuFe_e_pwP3HXnG4kdpvep-lVVQeqCfRE",
  authDomain: "competishun-42d64.firebaseapp.com",
  projectId: "competishun-42d64",
  storageBucket: "competishun-42d64.appspot.com",
  messagingSenderId: "801848423501",
  appId: "1:801848423501:web:d5bdf7d5b07f7931385804",
  measurementId: "G-YXP926PTWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
