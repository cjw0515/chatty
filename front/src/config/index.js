import firebase from 'firebase/app'
import { develop } from './runtimeconfig.json'
console.log(develop.apiKey)
let firebaseAppConfig = {
  apiKey: develop.apikey,
  authDomain: develop.authdomain,
  databaseURL: develop.databaseurl,
  storageBucket: develop.apikey,
  projectId: develop.projectid
};

const firebaseApp = firebase.initializeApp(firebaseAppConfig);  

export{
  firebaseApp
}

