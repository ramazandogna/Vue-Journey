<template>
   <nav v-if="user">
      <div>
         <p class="userName">Hi {{ user.displayName }}</p>
         <p class="userEmail">Currently logged in as ... {{ user.email }}</p>
      </div>
      <button @click="handleClick">Logout</button>
   </nav>
</template>

<script>
//compasable imports
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';

export default {
   setup() {
      const { logout, error } = useLogout();
      const { user } = getUser();
      console.log(user);
      const handleClick = async () => {
         await logout();
         if (!error.value) {
            console.log('User logged out');
         }
      };

      return { handleClick, user };
   },
};
</script>

<style>
nav {
   padding: 20px;
   border-bottom: 1px solid #ddd;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

nav p {
   margin: 2px auto;
   font-size: 16px;
   color: #444;
   text-align: left;
}

nav p.email {
   font-size: 14px;
   color: #888;
}

nav button {
   cursor: pointer;
}
.userName {
}
.userEmail {
}
</style>
