import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/auth';
require('firebase/firestore') ;

const firebaseConfig = {
  apiKey: "AIzaSyDZYgzLZDocwym_-t4z8aXMIEXYMv_ycsM",
  authDomain: "instaclonesrsebastian.firebaseapp.com",
  projectId: "instaclonesrsebastian",
  storageBucket: "instaclonesrsebastian.appspot.com",
  messagingSenderId: "347360225532",
  appId: "1:347360225532:web:b57bbf9ff431fcb552cf79",
  measurementId: "G-TX2LGFB0DQ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;

