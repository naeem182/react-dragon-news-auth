// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAV1l3lY2U29bEAVmeSOp1-Yhp13tmlTU",
    authDomain: "react-dragon-news-auth-d852c.firebaseapp.com",
    projectId: "react-dragon-news-auth-d852c",
    storageBucket: "react-dragon-news-auth-d852c.appspot.com",
    messagingSenderId: "136987876242",
    appId: "1:136987876242:web:ff048b4245eb15e2297f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth