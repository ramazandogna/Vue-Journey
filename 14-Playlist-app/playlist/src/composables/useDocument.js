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

   const updateDoc = async (updates) => {
      isPending.value = true;
      error.value = null;

      try {
         const res = await docRef.update(updates);
         isPending.value = false;
         return { res };
      } catch (err) {
         console.log(err.message);
         isPending.value = false;
         error.value = 'Something is horribly wrong with the update operation..';
      }
   };

   return { error, deleteDoc, isPending, updateDoc };
};

export default useDocuments;
