import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAiCMAKIibpjgxn7wKbwzoQpQT6t4jWfQk",
    authDomain: "money-sun.firebaseapp.com",
    projectId: "money-sun",
    storageBucket: "money-sun.appspot.com",
    messagingSenderId: "30605507559",
    appId: "1:30605507559:web:d2c0a7657620d21e339b42",
    measurementId: "G-LD3MGL16T4"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  //init
  export{projectFirestore, projectAuth,timestamp}

