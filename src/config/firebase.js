
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDT2wx_AsW8zNJz2xgajvOQFq4Dvc8ZMsA",
  authDomain: "house-marketplace-34f11.firebaseapp.com",
  projectId: "house-marketplace-34f11",
  storageBucket: "house-marketplace-34f11.appspot.com",
  messagingSenderId: "308097357341",
  appId: "1:308097357341:web:b79d7b31056b8c16e418f4"
};


export const app = initializeApp(firebaseConfig);
export const db=getFirestore()