import firebase from 'firebase/app'

let firebaseAppConfig = {
    apiKey: "AIzaSyDgt6zindww-GZFIOLXsVcEhZijs631Rcw",
    authDomain: "chatty-f2692.firebaseapp.com",
    databaseURL: "https://chatty-f2692.firebaseio.com",
    storageBucket: "chatty-f2692.appspot.com",
  };

const firebaseApp = firebase.initializeApp(firebaseAppConfig);  

export{
  firebaseApp
}

