import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDLsPBty7-HPgFFcOTFKhIsYxFo-igzS3g",
  authDomain: "twitter-clone-4e0fa.firebaseapp.com",
  projectId: "twitter-clone-4e0fa",
  storageBucket: "twitter-clone-4e0fa.appspot.com",
  messagingSenderId: "1026338495591",
  appId: "1:1026338495591:web:97e5f939a2292960cd08c2",
  measurementId: "G-GBSRLTSY30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
