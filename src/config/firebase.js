import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBXBKKW1iB0I6HtuFe4WqjlX9rvs-zF01Y",
    authDomain: "hiberciapp.firebaseapp.com",
    projectId: "hiberciapp",
    storageBucket: "hiberciapp.appspot.com",
    messagingSenderId: "657305143789",
    appId: "1:657305143789:web:c48cbafae540c8a6a77fe4",
    measurementId: "G-8YJ73MMR0J"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);