import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBX9rdA9Q6lUV1pYDqY9XT8J4piw67nqeo",
    authDomain: "curd-app-97fb8.firebaseapp.com",
    projectId: "curd-app-97fb8",
    storageBucket: "curd-app-97fb8.appspot.com",
    messagingSenderId: "29530761529",
    appId: "1:29530761529:web:b60886738f2dde0f1e60e8",
    measurementId: "G-QD3Z57G6RN"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)