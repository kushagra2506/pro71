import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBXEmA-9Zo1IcN0caAVDjLgODWmuo3DlGM",
    authDomain: "newsletter-5013c.firebaseapp.com",
    databaseURL: "https://newsletter-5013c-default-rtdb.firebaseio.com",
    projectId: "newsletter-5013c",
    storageBucket: "newsletter-5013c.appspot.com",
    messagingSenderId: "535936834853",
    appId: "1:535936834853:web:6f38f283124321a1b68ecc"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();