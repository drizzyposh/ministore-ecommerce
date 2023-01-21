import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDG1CMmAFGzmFpRrVAdTb7kuoR4fCxRIJY",
  authDomain: "minishop-fda2d.firebaseapp.com",
  projectId: "minishop-fda2d",
  storageBucket: "minishop-fda2d.appspot.com",
  messagingSenderId: "898106903436",
  appId: "1:898106903436:web:4df753412db884fafe24a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;