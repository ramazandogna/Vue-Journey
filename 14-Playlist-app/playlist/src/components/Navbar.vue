<template>
   <div class="navbar">
      <nav>
         <router-link :to="{ name: 'home' }"> <img src="../assets//logo.png" /></router-link>
         <h1 class="logo">
            <router-link :to="{ name: 'home' }"> Playlist</router-link>
         </h1>
         <div class="links">
            <div v-if="user">
               <span>Welcome,&ensp; {{ user.displayName }}</span>
               <router-link
                  class="btn"
                  :to="{ name: 'createplaylist' }"
                  >Create Playlist</router-link
               >
               <button
                  v-if="!isPending"
                  @click.prevent="handleSubmit"
               >
                  Logout
               </button>
               <button
                  v-else
                  disabled
               >
                  Logging out
               </button>
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
      console.log(user.displayName);
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
   padding: 12px 10px;
   margin-bottom: 50px;
   background: #f5f3f3;
   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
nav {
   display: flex;
   align-items: center;
   max-width: 1200px;
   margin: 0 auto;
}
nav h1 {
   margin-left: 10px;
}

.logo {
   color: #777;
}

nav .links {
   margin-left: auto;
}
nav .links a,
button {
   margin-left: 6px;
   font-size: 14px;
}
nav img {
   max-height: 50px;
}

span {
   font-size: 14px;
   display: inline-block;
   margin-right: 16px;
   padding-right: 16px;
   border-right: 1px solid #ccc;
}
</style>
