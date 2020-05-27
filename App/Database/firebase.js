import * as firebase from 'firebase';
const firebaseConfig={
    apiKey: "AIzaSyDmcD85V92CNFuhm_gcihslIR5FrkZQVtI",
    authDomain: "loginapp-97d54.firebaseapp.com",
    databaseURL: "https://loginapp-97d54.firebaseio.com",
    projectId: "loginapp-97d54",
    storageBucket: "loginapp-97d54.appspot.com",
    messagingSenderId: "945663791689",
    appId: "1:945663791689:web:e59bc29fdb9b9f88d1a598",
    measurementId: "G-TZ2FG59K0L"

}

firebase.initializeApp(firebaseConfig);
export default firebase;