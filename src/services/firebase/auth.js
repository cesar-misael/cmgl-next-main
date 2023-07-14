import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import app from "./"
import db from "./database"

function login(email, password) {

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });

}

function singup(params) {

    const {email, password, displayName} = params;

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        setDoc(
            doc(db, "profiles", user.uid), 
            {
                email: user.email,
                uid: user.uid,
                displayName,
            }
        );

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });
}

export { login, singup }