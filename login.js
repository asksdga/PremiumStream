alert("LOGIN JS LOADED");

import {

    auth,
    provider,
    signInWithPopup

}

from "./firebase.js";

alert("FIREBASE LOADED");

const googleBtn =

document.getElementById(
    "googleBtn"
);

googleBtn.onclick = ()=>{

    alert("BUTTON CLICK");

};
