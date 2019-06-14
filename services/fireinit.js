import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyB3EESWXKT9_Q3EWqnbCBMB4YPEcTqN6TM",
    authDomain: "mysitekv.firebaseapp.com",
    databaseURL: "https://mysitekv.firebaseio.com",
    projectId: "mysitekv",
    storageBucket: "mysitekv.appspot.com",
    messagingSenderId: "704627422302",
    appId: "1:704627422302:web:80b43cc19ec3e9e3"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase