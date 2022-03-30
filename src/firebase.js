import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import {
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_API_KEY,
} from "./constants/global";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "messaging-app-mern-fdf30.firebaseapp.com",
  projectId: "messaging-app-mern-fdf30",
  storageBucket: "messaging-app-mern-fdf30.appspot.com",
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
