import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA--_P4-1QRXQQJAxajpFTxL3m0SUzPGQE",
  authDomain: "crwn-clothing-640bb.firebaseapp.com",
  databaseURL: "https://crwn-clothing-640bb.firebaseio.com",
  projectId: "crwn-clothing-640bb",
  storageBucket: "crwn-clothing-640bb.appspot.com",
  messagingSenderId: "506980792513",
  appId: "1:506980792513:web:e7b786068b89e348577c40",
  measurementId: "G-YWWYX2HL43",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;
