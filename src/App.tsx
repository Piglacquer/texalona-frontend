import React from 'react';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Modal from '@material-ui/core/Modal';
import firebaseConfig from './firebaseConfig';
import AppRouter from './router';
import LoginPage from './LoginPage';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers:Object = {
  googleProvider: new firebase.auth.EmailAuthProvider(),
};

const App = ({user, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}: WrappedComponentProps) => {
  console.warn('yeet signInWithEmailAndPassword, signOut', signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword);
  console.warn('yeet user', user);
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      <AppRouter />
      <Modal
        open={open}
        onClose={handleCloseModal}
      >
        <div style={{
          backgroundColor: 'black',
          width: '50vw',
          height: '50vh',
        }}>
          <LoginPage signIn={signInWithEmailAndPassword} />
        </div>

      </Modal>
      <button onClick={handleOpenModal}>modal</button>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
