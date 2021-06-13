import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFwArOjEznYmihjU3GEYvDT6m3-cEan4o",
    authDomain: "block-master-df29d.firebaseapp.com",
    projectId: "block-master-df29d",
    storageBucket: "block-master-df29d.appspot.com",
    messagingSenderId: "677101171450",
    appId: "1:677101171450:web:c14e7cc92968605e1b0f43",
    measurementId: "G-3VTSFQZDDW"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}