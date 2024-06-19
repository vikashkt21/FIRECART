// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlYqFd16maOPAHAxF4llgNGy3Ei0GY04",
  authDomain: "e-commerce-cf318.firebaseapp.com",
  projectId: "e-commerce-cf318",
  storageBucket: "e-commerce-cf318.appspot.com",
  messagingSenderId: "1018042455831",
  appId: "1:1018042455831:web:af32f702bdfa026a8ec952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();
export {app, auth};