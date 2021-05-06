import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAnLaV2DsWHfgneLWdEa6VbkdABWgZ-JrI",
    authDomain: "image-gallery-f06c6.firebaseapp.com",
    projectId: "image-gallery-f06c6",
    storageBucket: "image-gallery-f06c6.appspot.com",
    messagingSenderId: "558059649453",
    appId: "1:558059649453:web:9ac2a0c11450b90d420924",
    measurementId: "G-N4RPYSNC3H"
  };
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp };