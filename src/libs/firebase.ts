import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAtmzAF5agHFCznxpeZttnFZH4C2oCy1DQ",
  authDomain: "paper-chat-412d2.firebaseapp.com",
  projectId: "paper-chat-412d2",
  storageBucket: "paper-chat-412d2.appspot.com",
  messagingSenderId: "333300820340",
  appId: "1:333300820340:web:d917fc9ac0ea29d018a421",
  measurementId: "G-5J34WGFKS8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default firebase;
