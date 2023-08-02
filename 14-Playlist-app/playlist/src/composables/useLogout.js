//vue import
import { ref } from 'vue';
//firebase import
import { projectAuth } from '../firebase/config';

const error = ref(null);

const logout = async () => {
   error.value = null;

   try {
      await projectAuth.signOut();
   } catch (err) {
      console.log(err);
      error.value = err.message;
   }
};

const useLogout = () => {
   return { logout, error };
};

export default useLogout;
