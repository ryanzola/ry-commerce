// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Fkn4urLtsFhirLFbViiCr5PBBgoKJ9c",
  authDomain: "rycommerce-50462.firebaseapp.com",
  projectId: "rycommerce-50462",
  storageBucket: "rycommerce-50462.appspot.com",
  messagingSenderId: "18524820033",
  appId: "1:18524820033:web:1873fea09009416f1e6cc0",
  measurementId: "G-BLWSLDH299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app)

export { db, auth };