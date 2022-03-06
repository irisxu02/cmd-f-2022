
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// // import firebase from 'firebase/compat/app';
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyDUj-dcSQC5p3Pmgg8c_lvMCdaM0Mzxq8Q",
    authDomain: "auth-dev-75b5f.firebaseapp.com",
    projectId: "auth-dev-75b5f",
    storageBucket: "auth-dev-75b5f.appspot.com",
    messagingSenderId: "484778811712",
    appId: "1:484778811712:web:de135cabccc6c530b01aa5"
})

export const auth = getAuth(app)
export default app


//Unused
// // // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // let app: FirebaseApp;

// // // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUj-dcSQC5p3Pmgg8c_lvMCdaM0Mzxq8Q",
//   authDomain: "auth-dev-75b5f.firebaseapp.com",
//   projectId: "auth-dev-75b5f",
//   storageBucket: "auth-dev-75b5f.appspot.com",
//   messagingSenderId: "484778811712",
//   appId: "1:484778811712:web:de135cabccc6c530b01aa5"
// };

// initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// export default firebase;