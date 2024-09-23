import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
    apiKey:"AIzaSyA2RVWcM4IDzwHWwl3r2oK3Blk2YxssIHE",
    authDomain:"chatapp-d1024.firebaseapp.com",
    projectId:"chatapp-d1024",
    storageBucket:"chatapp-d1024.appspot.com",
    messagingSenderId:"257266577214",
    appId:"1:257266577214:web:f768a25614fad14f20866f",
    databaseURL:"86ET5RCdk85Dt70AhLIV"
};



// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();