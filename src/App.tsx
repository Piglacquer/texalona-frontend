import React from 'react';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import LoginPage from './LoginPage';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers:Object = {
  googleProvider: new firebase.auth.EmailAuthProvider(),
};

const App = ({user, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}: WrappedComponentProps) => {
  console.warn('yeet signInWithEmailAndPassword, signOut', signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword);
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
