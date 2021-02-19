

  
  import  firebase from "firebase";
require("@firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4XVUsoBQpm_v4a8KBsGpLT0AkEwprr0o",
    authDomain: "library-d8033.firebaseapp.com",
    projectId: "library-d8033",
    storageBucket: "library-d8033.appspot.com",
    messagingSenderId: "668339336346",
    appId: "1:668339336346:web:87ea30dca1491b83059b23"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);




export default firebase.firestore();
