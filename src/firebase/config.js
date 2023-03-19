import app from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {

    apiKey: "AIzaSyCxM7F1aU2Uy1PPpUN1lWPCb6xGkZORdug",
  
    authDomain: "job-listing-63ab2.firebaseapp.com",
  
    projectId: "job-listing-63ab2",
  
    storageBucket: "job-listing-63ab2.appspot.com",
  
    messagingSenderId: "976604506465",
  
    appId: "1:976604506465:web:fd50e3a9be1dcd33effd20"
  
  };

// Initialize firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export  {firebase, firestore, app}