import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhZtd0CT_ipSpHIS4v2oCKqXlwsA__K4M",
    authDomain: "organizacao-688aa.firebaseapp.com",
    projectId: "organizacao-688aa",
    storageBucket: "organizacao-688aa.appspot.com",
    messagingSenderId: "750880168400",
    appId: "1:750880168400:web:92d3c45e7b8291f542c1d5"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();

export default db;
