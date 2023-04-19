import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5xyW8xrqYtzCW7t7MBYrpKsaxrHOoiwU",
  authDomain: "disneyplus-clone-9da01.firebaseapp.com",
  projectId: "disneyplus-clone-9da01",
  storageBucket: "disneyplus-clone-9da01.appspot.com",
  messagingSenderId: "178274277920",
  appId: "1:178274277920:web:a3bb696af8dd50b0817a45",
  measurementId: "G-E91N7W2D8N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
