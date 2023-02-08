// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm1Vl-_kYSds7MGJU9N0q4551SbxbRVhM",
  authDomain: "nurture-nature-5765c.firebaseapp.com",
  projectId: "nurture-nature-5765c",
  storageBucket: "nurture-nature-5765c.appspot.com",
  messagingSenderId: "763406991470",
  appId: "1:763406991470:web:90600196bdcf215bf7e67f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
