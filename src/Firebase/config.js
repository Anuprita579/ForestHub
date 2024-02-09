import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuDbIuUiVk6QOxi0-1f9TbGct8tySE9mM",
    authDomain: "foresthub-67220.firebaseapp.com",
    projectId: "foresthub-67220",
    storageBucket: "foresthub-67220.appspot.com",
    messagingSenderId: "528518431830",
    appId: "1:528518431830:web:50e1a309679951fd43a7f7",
    measurementId: "G-5L3XF1CRCQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
