import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyw4IGV71t5lB6Fj-_z6kXpz7DDOSBnx4",
  authDomain: "mini-c5ca6.firebaseapp.com",
  databaseURL: "https://mini-c5ca6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-c5ca6",
  storageBucket: "mini-c5ca6.appspot.com",
  messagingSenderId: "723532830220",
  appId: "1:723532830220:web:c18a2f8256464e3fd9c029",
  measurementId: "G-BE7KYH6YHH"
};

let app;
if ( firebase.apps.length === 0 ) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };