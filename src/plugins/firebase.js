import Vue from "vue"
import { firestorePlugin } from "vuefire"
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2YKyLcVd39KzxcIA4eGDo0sK5i4srzT8",
    authDomain: "salmonrunproject.firebaseapp.com",
    databaseURL: "https://salmonrunproject.firebaseio.com",
    projectId: "salmonrunproject",
    storageBucket: "salmonrunproject.appspot.com",
    messagingSenderId: "237537081773",
    appId: "1:237537081773:web:52ea3c9979c49838e54924",
    measurementId: "G-EBXKSE6T4B"
});

export const db = firebaseApp.firestore();