import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAi0UmYmmcX35e4ICd_jP-BgZ9e8FC5lf0",
  authDomain: "felix1d.firebaseapp.com",
  databaseURL: "https://felix1d-default-rtdb.firebaseio.com",
  projectId: "felix1d",
  storageBucket: "felix1d.appspot.com",
  messagingSenderId: "39214114709",
  appId: "1:39214114709:web:11e619fb7e37a75286f89c",
  measurementId: "G-F0DW7S05KF",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getStorage(app);
const storage = getStorage(app);
// const storage = getFirestore.storage();

export { app, firestore, storage };
