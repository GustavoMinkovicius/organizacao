import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDga9M1qDdpe7YiUSqtl_fjej0Vx07kPwQ",
    authDomain: "organizacao-c796f.firebaseapp.com",
    projectId: "organizacao-c796f",
    storageBucket: "organizacao-c796f.appspot.com",
    messagingSenderId: "210864414775",
    appId: "1:210864414775:web:8610bab34d6840ed611fb2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
 