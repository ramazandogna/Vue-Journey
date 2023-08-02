//vue import
import { ref } from 'vue';
//firebase import
import { projectAuth } from '@/firebase/config';

const error = ref(null);

const login = async (email, password) => {
   error.value = null;

   try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      error.value = null;
      return res;
   } catch (err) {
      console.log(err.value);
      error.value = 'Incorrect login credentials';
   }
};

const useSignup = () => {
   return { error, login };
};

export default useSignup;
