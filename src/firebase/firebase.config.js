// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('evvironment variable', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: "AIzaSyC17Xj8NPMV9qbRBML31aRLkapCUgveE7w",
  authDomain: "assignment10-74579.firebaseapp.com",
  projectId: "assignment10-74579",
  storageBucket: "assignment10-74579.appspot.com",
  messagingSenderId: "612510505096",
  appId: "1:612510505096:web:8dc637bd59642088bc273d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;