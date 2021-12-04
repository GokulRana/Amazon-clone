// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-Lf9FxbUYfddUvQi8p9nfrioPh54kIVA",
  authDomain: "clone-39568.firebaseapp.com",
  databaseURL: "https://clone-39568-default-rtdb.firebaseio.com",
  projectId: "clone-39568",
  storageBucket: "clone-39568.appspot.com",
  messagingSenderId: "736221211476",
  appId: "1:736221211476:web:a0edda7051d21d6e97b6c1",
  measurementId: "G-0N7QL4Z1YY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };