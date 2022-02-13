// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsUBCdx3hhXyDvVPdqsrdght1zpk2GfRQ",
    authDomain: "instagram-clone-e25ba.firebaseapp.com",
    projectId: "instagram-clone-e25ba",
    storageBucket: "instagram-clone-e25ba.appspot.com",
    messagingSenderId: "878280679785",
    appId: "1:878280679785:web:4442e4f07c6d62c094ddf8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };