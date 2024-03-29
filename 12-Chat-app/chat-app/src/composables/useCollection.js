//vue imports
import { ref } from 'vue';
//import firebase
import { projectFirestore } from '@/firebase/config';

const useCollection = (collection) => {
   const error = ref(null);
   const addDoc = async (doc) => {
      error.value = null;

      try {
         await projectFirestore.collection(collection).add(doc);
      } catch (err) {
         console.log(err.message);
         error.value = 'couldnt not send message';
      }
   };
   return { error, addDoc };
};

export default useCollection;
