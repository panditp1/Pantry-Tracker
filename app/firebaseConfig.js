// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSt_mwta5t54X5qZLVEGplpLhT_7_2dFU",
  authDomain: "pantryapp-fdfec.firebaseapp.com",
  projectId: "pantryapp-fdfec",
  storageBucket: "pantryapp-fdfec.appspot.com",
  messagingSenderId: "547974169334",
  appId: "1:547974169334:web:2add67ce40947a30fae2d7",
  measurementId: "G-MBF0VP4CPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);
export { db };
