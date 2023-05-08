import app from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyD0nXMJ6FarwVOJvXwR1wfdJrhxJw3JKjg",

  authDomain: "job-listing2-9d891.firebaseapp.com",

  projectId: "job-listing2-9d891",

  storageBucket: "job-listing2-9d891.appspot.com",

  messagingSenderId: "270559374380",

  appId: "1:270559374380:web:1687224b0217a2ef977589"

};


// Initialize firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export  {firebase, firestore, app}
