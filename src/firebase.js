import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBNsScnr1tCic6mseyEiYIWzEwvnQ9K91s",
    authDomain: "unichat-8e1b9.firebaseapp.com",
    projectId: "unichat-8e1b9",
    storageBucket: "unichat-8e1b9.appspot.com",
    messagingSenderId: "915647717308",
    appId: "1:915647717308:web:beaa33c3c619ecae4a15b9",
  })
  .auth();
