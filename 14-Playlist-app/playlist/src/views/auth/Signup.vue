<template>
   <form @submit.prevent="handleSubmit">
      <h3>Signup</h3>
      <input
         type="text"
         placeholder="Display Name"
         v-model="displayName"
      />
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
      <button v-if="!isPending">Login</button>
      <button v-else>Loading</button>
   </form>
</template>

<script>
//composable imports
import useSignup from '@/composables/useSignup';
//vue imports
import { ref } from 'vue';
//router imports
import { useRouter } from 'vue-router';
export default {
   setup() {
      const { error, signup, isPending } = useSignup();
      const router = useRouter();
      const email = ref('');
      const password = ref('');
      const displayName = ref('');

      const handleSubmit = async () => {
         const res = await signup(email.value, password.value, displayName.value);
         router.push({ name: 'home' });
         if (!error.value) {
            console.log('user signed up');
         }
      };
      return { error, email, password, displayName, handleSubmit, isPending };
   },
};
</script>

<style></style>
