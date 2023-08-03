//vue imports
import { ref } from 'vue';
//composable imports
import getUser from './getUser';
//firebase imports
import { projectStorage } from '@/firebase/config';

const { user } = getUser();

const useStorage = () => {
   const error = ref(null);
   const url = ref(null);
   const filePath = ref(null);

   const uploadImage = async (file) => {
      filePath.value = `covers/${user.value.uid}/${file.name}`;

      const storageRef = projectStorage.ref(filePath.value);

      try {
         const res = await storageRef.put(file);
         url.value = await res.ref.getDownloadURL();
      } catch (err) {
         console.log(err.message);
         error.value = err.message;
      }
   };
   return { uploadImage, url, error, filePath };
};

export default useStorage;
