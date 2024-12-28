// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgiIQN-0p5x-7PNaHrRZGRKpG7dnWFpRc",
  authDomain: "bocajuniors-store.firebaseapp.com",
  projectId: "bocajuniors-store",
  storageBucket: "bocajuniors-store.firebasestorage.app",
  messagingSenderId: "824040363121",
  appId: "1:824040363121:web:58e231d6db429bba2d37d0",
  measurementId: "G-H0Y9DJN94T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);