<template>
   <form>
      <textarea
         @keypress.enter.prevent="handleSubmit"
         placeholder="Write your message and tab enter"
         v-model="message"
      />
      <div class="error">{{ error }}</div>
   </form>
</template>

<script>
//vue import
import { Ref, ref } from 'vue';
//compasasble import
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';
//firebase import
import { timestamp } from '../firebase/config';
export default {
   setup() {
      const { user } = getUser();
      const { addDoc, error } = useCollection('messages');
      const message = ref('');

      const handleSubmit = async () => {
         const chat = {
            name: user.value.displayName,
            message: message.value,
            createdAt: timestamp(),
         };
         await addDoc(chat);
         if (!error.value) {
            message.value = '';
         }
      };

      return { message, handleSubmit, error };
   },
};
</script>

<style scoped>
form {
   margin: 10px;
}
textarea {
   width: 100%;
   max-width: 100%;
   margin-bottom: 7px;
   padding: 10px;
   box-sizing: border-box;
   border: 0;
   border-radius: 20px;
   font-family: inherit;
   outline: none;
}
</style>
