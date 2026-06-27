import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getDatabase
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

    apiKey:
    "AIzaSyAFotJC3-hta5wASL4ZdPA0dTOmTZ9xU8k",

    authDomain:
    "premiumstream-f5cc2.firebaseapp.com",

    databaseURL:
    "https://premiumstream-f5cc2-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId:
    "premiumstream-f5cc2",

    storageBucket:
    "premiumstream-f5cc2.firebasestorage.app",

    messagingSenderId:
    "849846764734",

    appId:
    "1:849846764734:web:8e5d10054e66fd78014aef"

};

export const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const db =
getDatabase(app);

export const provider =
new GoogleAuthProvider();

export {
    signInWithPopup,
    signOut
};
