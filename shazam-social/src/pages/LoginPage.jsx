import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyBoKinSPrKLcHlFV1AYVW5rgF_5Qjh4toM",
  authDomain: "social-shazam.firebaseapp.com",
});
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

class LoginPage extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <CenteredContentWrapper>
        <h1>Please use your Google account to login</h1>
        <div className="App">
          {this.state.isSignedIn ? (
            <span>
              <Redirect to="/dashboard" />
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <h1>Welcome {firebase.auth().currentUser.email}</h1>
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </CenteredContentWrapper>
    );
  }
}

export default LoginPage;
