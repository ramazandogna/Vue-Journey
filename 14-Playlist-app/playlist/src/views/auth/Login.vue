<template>
   <form @submit.prevent="handleSubmit">
      <h3 class="card-title">Login</h3>
      <input
         type="email"
         placeholder="Email"
         v-model="email"
      />
      <input
         type="password"
         placeholder="Password"
         v-model="password"
      />
      <div
         v-if="error"
         class="error"
      >
         {{ error }}
      </div>
      <div class="button-container">
         <button v-if="!isPending">Login</button>
         <button
            v-else
            disabled
         >
            Loading...
         </button>
      </div>
   </form>
</template>

<script>
//composable imports
import useLogin from '../../composables/useLogin.js';
//vue imports
import { ref } from 'vue';
//router imports
import { useRouter } from 'vue-router';

export default {
   setup() {
      const { error, login, isPending } = useLogin();
      const router = useRouter();
      const email = ref('');
      const password = ref('');

      const handleSubmit = async () => {
         const res = await login(email.value, password.value);
         router.push({ name: 'home' });
         if (!error.value) {
            console.log('user logged in');
         }
      };

      return { email, password, handleSubmit, error, isPending, router };
   },
};
</script>

<style></style>
