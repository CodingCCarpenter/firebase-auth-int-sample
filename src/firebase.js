import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  // Your web app's Firebase configuration
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const rtdb = firebase.database();
export const auth = firebase.auth();
