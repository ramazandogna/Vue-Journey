//firebase imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyCd1xoUDh1WszMccoq_wgrN7AUSYujmqic',
   authDomain: 'play-list-14a61.firebaseapp.com',
   projectId: 'play-list-14a61',
   storageBucket: 'play-list-14a61.appspot.com',
   messagingSenderId: '341935022563',
   appId: '1:341935022563:web:d79600a34a2fa7354ac0d6',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default { projectFirestore, projectAuth, timestamp };
