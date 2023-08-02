//vue import
import { ref } from 'vue';
//firebase import
import { projectAuth } from '@/firebase/config';

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
   user.value = _user;
});

const getUser = () => {
   return { user };
};

export default getUser;
