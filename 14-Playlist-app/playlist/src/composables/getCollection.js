import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
   const documents = ref(null);
   const error = ref(null);
   const isPending = ref(false);

   let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

   collectionRef.onSnapshot(
      (snap) => {
         isPending.value = true;
         let result = [];
         snap.docs.forEach((doc) => {
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id });
         });
         documents.value = result;
         error.value = null;
      },
      (err) => {
         console.log(err.message);
         documents.value = null;
         error.value = 'could not fetch data';
         isPending.value = false;
      }
   );
   return { documents, error, isPending };
};

export default getCollection;
