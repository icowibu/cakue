import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9vwC2pLYz-gfw1YNeolXC7xPxlQuwaLc",
  authDomain: "cakue-81c5f.firebaseapp.com",
  projectId: "cakue-81c5f",
  storageBucket: "cakue-81c5f.appspot.com",
  messagingSenderId: "854563444847",
  appId: "1:854563444847:web:158344b09a1a6ad162159a",
};

const app = initializeApp(firebaseConfig);

// services init
const firebaseAuth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { firebaseAuth, db, storage };
