import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM-nhfRmbxRMgTLfX82DlHlqOaM1ERcsw",
  authDomain: "crwn-db-d184a.firebaseapp.com",
  projectId: "crwn-db-d184a",
  storageBucket: "crwn-db-d184a.appspot.com",
  messagingSenderId: "783953325914",
  appId: "1:783953325914:web:cc1c0679a5c764a4a0cd63",
  measurementId: "G-SYLMGNGJ71",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
