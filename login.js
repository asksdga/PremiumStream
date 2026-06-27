import {

    auth,
    provider,
    signInWithPopup

}

from "./firebase.js";

const googleBtn =

document.getElementById(
    "googleBtn"
);

googleBtn.onclick =
async ()=>{

    try{

        const result =

        await signInWithPopup(

            auth,
            provider

        );

        const user =
        result.user;

        localStorage.setItem(

            "ps_user",

            JSON.stringify({

                uid:
                user.uid,

                name:
                user.displayName,

                email:
                user.email,

                picture:
                user.photoURL

            })

        );

        location.href =
        "dashboard.html";

    }

    catch(error){

        alert(

            error.message

        );

        console.log(error);

    }

};
