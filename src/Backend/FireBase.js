import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVEG7vq53puHrrbxXmB1KYbUR8nc4OHUo",
  authDomain: "stone-view.firebaseapp.com",
  projectId: "stone-view",
  storageBucket: "stone-view.appspot.com",
  messagingSenderId: "472883192474",
  appId: "1:472883192474:web:c401cb459fd45ac4bdb523"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// Para exportar la funcion de contactanos
export const db = getFirestore(firebaseApp);

