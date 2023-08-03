<template>
   <div class="navbar">
      <nav>
         <router-link :to="{ name: 'home' }">
            <img
               src="../assets//logo.png"
               alt=""
         /></router-link>
         <h1>
            <router-link :to="{ name: 'home' }"> Playlist</router-link>
         </h1>
         <div class="links">
            <div v-if="user">
               <router-link
                  class="btn"
                  :to="{ name: 'createplaylist' }"
                  >Create Playlist</router-link
               >
               <button @click.prevent="handleSubmit">Logout</button>
            </div>
            <div v-else>
               <router-link
                  class="btn"
                  :to="{ name: 'signup' }"
               >
                  Signup
               </router-link>
               <router-link
                  class="btn"
                  :to="{ name: 'login' }"
               >
                  Login
               </router-link>
            </div>
         </div>
      </nav>
   </div>
</template>

<script>
//composable imports
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';
//router
import { useRouter } from 'vue-router';

export default {
   setup() {
      const { error, logout, isPending } = useLogout();
      const { user } = getUser();
      const router = useRouter();
      const handleSubmit = async () => {
         await logout();
         router.push({ name: 'login' });
         if (!error.value) {
            console.log('Logged out is succesfull');
         }
      };

      return { error, handleSubmit, isPending, user };
   },
};
</script>

<style scoped>
.navbar {
   padding: 16px 10px;
   margin-bottom: 60px;
   background: #fff;
}
nav {
   display: flex;
   align-items: center;
   max-width: 1200px;
   margin: 0 auto;
}
nav h1 {
   margin-left: 20px;
}
nav .links {
   margin-left: auto;
}
nav .links a,
button {
   margin-left: 16px;
   font-size: 14px;
}
nav img {
   max-height: 60px;
}
</style>
