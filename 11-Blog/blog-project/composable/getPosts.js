//vue
import { ref } from 'vue';

//firebase
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { fb } from '../firebase/config';
import { async } from '@firebase/util';

const getPosts = async () => {
   const db = getFirestore();
   const fbRef = collection(db, 'posts');
   const fbDocs = await getDocs(fbRef);
   const data = fbDocs.docs.map((doc) => doc.data());
   return data;
};

export default getPosts;
