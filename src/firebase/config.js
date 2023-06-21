import app from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyB4QKTOB2Xxp5X36vPI_ODPYV8CBvouNNE",

    authDomain: "joblisting3-e3cbd.firebaseapp.com",

    projectId: "joblisting3-e3cbd",

    storageBucket: "joblisting3-e3cbd.appspot.com",

    messagingSenderId: "707004951941",

    appId: "1:707004951941:web:f9732ac71d16ee1069a8ec",

    measurementId: "G-6JPNTTCL4P"

};


// Initialize firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export  {firebase, firestore, app}
