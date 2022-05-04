import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDga9M1qDdpe7YiUSqtl_fjej0Vx07kPwQ",
    authDomain: "organizacao-c796f.firebaseapp.com",
    projectId: "organizacao-c796f",
    storageBucket: "organizacao-c796f.appspot.com",
    messagingSenderId: "210864414775",
    appId: "1:210864414775:web:8610bab34d6840ed611fb2"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();

export default db; 
