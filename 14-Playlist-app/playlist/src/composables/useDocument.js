//vue imports
import { ref } from 'vue';
//firebase imports
import { projectFirestore } from '@/firebase/config';

const useDocuments = (collection, id) => {
   const error = ref(null);
   const isPending = ref(false);

   let docRef = projectFirestore.collection(collection).doc(id);

   const deleteDoc = async () => {
      isPending.value = true;
      error.value = null;

      try {
         const res = await docRef.delete();
         isPending.value = false;
         return { res };
      } catch (err) {
         console.log(err.message);
         isPending.value = false;
         error.value = 'Something is horribly wrong with the delete operation..';
      }
   };
   return { error, deleteDoc, isPending };
};

export default useDocuments;
