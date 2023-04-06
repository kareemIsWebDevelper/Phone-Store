// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDs_uhOO7rNW0NFrzVI58U7NXx-Ud8KqLo',
  authDomain: 'smart-fone-fbad2.firebaseapp.com',
  projectId: 'smart-fone-fbad2',
  storageBucket: 'smart-fone-fbad2.appspot.com',
  messagingSenderId: '865093056616',
  appId: '1:865093056616:web:55a4b7c876520eb04be3dd'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
