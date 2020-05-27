import * as firebase from 'firebase';
const firebaseConfig={
    apiKey: "api key",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

}

firebase.initializeApp(firebaseConfig);
export default firebase;
