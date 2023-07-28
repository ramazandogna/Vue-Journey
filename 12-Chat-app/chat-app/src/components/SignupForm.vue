<template>
   <form @submit.prevent="handleSubmit">
      <input
         type="text"
         required
         placeholder="Display Name"
         v-model="displayName"
      />
      <input
         type="email"
         required
         placeholder="E-Mail"
         v-model="email"
      />
      <input
         type="password"
         required
         placeholder="Password"
         v-model="password"
      />
      <button>Signup</button>
   </form>
</template>

<script>
//vue imports
import { ref } from 'vue';
//composable import
import useSignup from '../composables/useSignup';

export default {
   setup(props) {
      const { error, signup } = useSignup;
      const displayName = ref('');
      const email = ref('');
      const password = ref('');

      const handleSubmit = () => {
         console.log(displayName.value, email.value, password.value);
      };

      return { displayName, email, password, handleSubmit };
   },
};
</script>

<style scoped></style>
