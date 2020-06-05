import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkVhzDpGjX43wsdb-lYqhpEt6q849627A",
  authDomain: "crwn-1b76e.firebaseapp.com",
  databaseURL: "https://crwn-1b76e.firebaseio.com",
  projectId: "crwn-1b76e",
  storageBucket: "crwn-1b76e.appspot.com",
  messagingSenderId: "66068684850",
  appId: "1:66068684850:web:f0e96b4ddba6709f9f5c2b",
  measurementId: "G-R05ZY20G3P",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
