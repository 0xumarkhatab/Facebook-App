// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {
  getDoc,
  getFirestore,
  getDocs,
  collection,
  query,
} from "firebase/firestore";

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// The Firebase Admin SDK to access Firestore.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe0Tk16WEw_cGGLrXhKksQ1SwUApqlZ0c",
  authDomain: "facebook-clone-465.firebaseapp.com",
  projectId: "facebook-clone-465",
  storageBucket: "facebook-clone-465.appspot.com",
  messagingSenderId: "906540239446",
  appId: "1:906540239446:web:90635e00b5787af74749f7",
  measurementId: "G-9H5TDNNBEY",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// async function DocsGetter() {
//   await getDocs(collection(db, "posts")).then((res) => {
//     res._snapshot.docChanges.map((item) => {
//       console.log(item.doc.data.value.mapValue.fields);
//     });
//   });
// }

//DocsGetter();

const Auth = getAuth();
const provider = new GoogleAuthProvider();

export { Auth, provider, firebaseConfig };
export default db;
