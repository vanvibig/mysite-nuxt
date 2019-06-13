import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyB3EESWXKT9_Q3EWqnbCBMB4YPEcTqN6TM",
        authDomain: "mysitekv.firebaseapp.com",
        databaseURL: "https://mysitekv.firebaseio.com",
        projectId: "mysitekv",
        storageBucket: "mysitekv.appspot.com",
        messagingSenderId: "704627422302",
        appId: "1:704627422302:web:80b43cc19ec3e9e3"
      };
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}