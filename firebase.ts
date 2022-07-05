// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnoNJaZ5l57ouQp1wkma21P2LOi37cVS8",
  authDomain: "netflix-clone-sl-83dec.firebaseapp.com",
  projectId: "netflix-clone-sl-83dec",
  storageBucket: "netflix-clone-sl-83dec.appspot.com",
  messagingSenderId: "903293437469",
  appId: "1:903293437469:web:3455a9bb3203693720e8f4",

}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
