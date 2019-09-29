import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBLXPQLKZ0FDOVBKTLuDEQW3OvbeCAxpJc",
  authDomain: "ecom-clothing-6e101.firebaseapp.com",
  databaseURL: "https://ecom-clothing-6e101.firebaseio.com",
  projectId: "ecom-clothing-6e101",
  storageBucket: "",
  messagingSenderId: "376956967808",
  appId: "1:376956967808:web:a457c380ba9380f540ff65",
  measurementId: "G-Z0535RBHWK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
