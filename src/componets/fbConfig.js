// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { Firestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhlfY__Rqv7e2PYxW88RKHFl4CAtrR75E",
  authDomain: "room-8f0da.firebaseapp.com",
  projectId: "room-8f0da",
  storageBucket: "room-8f0da.appspot.com",
  messagingSenderId: "36103799960",
  appId: "1:36103799960:web:0a5e462954317b0545bced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// new Firestore().settings( {timestampsInSnapshots : true } );

export default app;