import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5z81dBA0_aBgp88uMVxg-E4ejYAwQqGQ",
  authDomain: "netflix-clone-5136c.firebaseapp.com",
  projectId: "netflix-clone-5136c",
  storageBucket: "netflix-clone-5136c.appspot.com",
  messagingSenderId: "556816095300",
  appId: "1:556816095300:web:755cd9e472e552d2720411"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db;

