import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAyFo0zpNrgIR79gGMjjwV7KlQHMgtbZqM",
    authDomain: "moneytracker-813ca.firebaseapp.com",
    databaseURL: "https://moneytracker-813ca-default-rtdb.firebaseio.com",
    projectId: "moneytracker-813ca",
    storageBucket: "moneytracker-813ca.appspot.com",
    messagingSenderId: "808237736288",
    appId: "1:808237736288:web:2c9a66023a4057faef7e05",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;