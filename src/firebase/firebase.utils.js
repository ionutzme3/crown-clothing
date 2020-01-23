import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    
        apiKey: "AIzaSyAV-vY9rEUJ4kQ0OiiaD6KdefeltWfwVhM",
        authDomain: "crwn-db-cfae7.firebaseapp.com",
        databaseURL: "https://crwn-db-cfae7.firebaseio.com",
        projectId: "crwn-db-cfae7",
        storageBucket: "crwn-db-cfae7.appspot.com",
        messagingSenderId: "149646345425",
        appId: "1:149646345425:web:085924425c69bb180e31f0",
        measurementId: "G-NQ1WQH57Q2"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;