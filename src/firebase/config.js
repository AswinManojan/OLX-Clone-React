import { initializeApp } from "firebase/app";
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC8-EIzJnxHN29S2QnVOxTB0ARJUWxwPDk",
    authDomain: "olx-clone-a74d1.firebaseapp.com",
    projectId: "olx-clone-a74d1",
    storageBucket: "olx-clone-a74d1.appspot.com",
    messagingSenderId: "429635748860",
    appId: "1:429635748860:web:5f2a0b9a2b2e9c8946e879",
    measurementId: "G-86G4P1HRG0"
  };

 export const Firebase = initializeApp(firebaseConfig);