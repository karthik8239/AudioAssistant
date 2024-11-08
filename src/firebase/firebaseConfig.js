import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyBw8eyXXXX",
//     authDomain: "audio-medical-assistant-XXX.firebaseapp.com",
//     projectId: "audio-medical-assistant-XXX",
//     storageBucket: "audio-medical-assistant-XXX.appspot.com",
//     messagingSenderId: "563763083207",
//     appId: "1:563763083207:web:2aa0338556f6b2408b4be2",
//     measurementId: "G-XXX"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDfFql0uh21Te9CZtQw8uey5uKHUl2op3k",
    authDomain: "fir-medical-assistant-7689b.firebaseapp.com",
    projectId: "fir-medical-assistant-7689b",
    storageBucket: "fir-medical-assistant-7689b.appspot.com",
    messagingSenderId: "28223451749",
    appId: "1:28223451749:web:89d08415646e26a2070c8c",
    measurementId: "G-SV6ED0ZN8T"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase storage
const storage = getStorage(app);


export { storage };