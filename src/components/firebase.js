import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUlNOuXinhCJlfwKiKMSLJtQyd6mdc4no",
    authDomain: "twitter-5ac21.firebaseapp.com",
    projectId: "twitter-5ac21",
    storageBucket: "twitter-5ac21.appspot.com",
    messagingSenderId: "1030786793622",
    appId: "1:1030786793622:web:a0d701263baeff898e02b7",
    measurementId: "G-YQPM1TTP3M"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;