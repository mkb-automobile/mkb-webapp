// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_U1d7_FH84IYzeCwh48sRjJyDAx1sDUI",
  authDomain: "mkb-automobile.firebaseapp.com",
  projectId: "mkb-automobile",
  storageBucket: "mkb-automobile.appspot.com",
  messagingSenderId: "315599201397",
  appId: "1:315599201397:web:e3fe4e7526647500c8043c",
  measurementId: "G-CLGEXQ0NET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
