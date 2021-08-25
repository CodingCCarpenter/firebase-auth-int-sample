import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCns7rjM4fwG6jRng_o0f31fE6NKiYZXEo",
  authDomain: "mentor-beast-f190c.firebaseapp.com",
  projectId: "mentor-beast-f190c",
  storageBucket: "mentor-beast-f190c.appspot.com",
  messagingSenderId: "376697092042",
  appId: "1:376697092042:web:d78063fcc4d68c9213c133",
  measurementId: "G-X0NYTW31D0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const rtdb = firebase.database();
export const auth = firebase.auth();
// if (window.location.hostname === "localhost") {
//   rtdb.useEmulator("localhost", 9000);
//   auth.useEmulator("http://localhost:9099");
// }
