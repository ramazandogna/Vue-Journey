// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyC6-Vbjirp966k5F8YXb-E8QHmfHq1AVHw',
   authDomain: 'blog-vue3-aa450.firebaseapp.com',
   projectId: 'blog-vue3-aa450',
   storageBucket: 'blog-vue3-aa450.appspot.com',
   messagingSenderId: '813251964963',
   appId: '1:813251964963:web:8a848de75f6f80ce2b4196',
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export { fb };
