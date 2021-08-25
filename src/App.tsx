import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase, { rtdb } from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user);
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    const email = "tim@nuclius,com";
    rtdb
      .ref("invited_users/")
      .child(email)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("User not invited");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isSignedIn ? (
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </header>
    </div>
  );
}

export default App;
