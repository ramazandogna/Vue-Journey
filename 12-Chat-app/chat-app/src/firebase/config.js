//Firebase imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyC6-Vbjirp966k5F8YXb-E8QHmfHq1AVHw',
   authDomain: 'blog-vue3-aa450.firebaseapp.com',
   projectId: 'blog-vue3-aa450',
   storageBucket: 'blog-vue3-aa450.appspot.com',
   messagingSenderId: '813251964963',
   appId: '1:813251964963:web:8a848de75f6f80ce2b4196',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
