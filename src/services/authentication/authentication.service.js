import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDIJDoM-rKO6YHTP1jzgzP-9Rk3AkiTHeo",
  authDomain: "mealstogo-2d595.firebaseapp.com",
  projectId: "mealstogo-2d595",
  storageBucket: "mealstogo-2d595.appspot.com",
  messagingSenderId: "958748520873",
  appId: "1:958748520873:web:b423446e864ef5585f94b8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const loginRequest = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);