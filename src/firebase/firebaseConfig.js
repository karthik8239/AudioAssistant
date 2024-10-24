import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBw8eyXXXX",
    authDomain: "audio-medical-assistant-XXX.firebaseapp.com",
    projectId: "audio-medical-assistant-XXX",
    storageBucket: "audio-medical-assistant-XXX.appspot.com",
    messagingSenderId: "563763083207",
    appId: "1:563763083207:web:2aa0338556f6b2408b4be2",
    measurementId: "G-XXX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase storage
const storage = getStorage(app);


export { storage };