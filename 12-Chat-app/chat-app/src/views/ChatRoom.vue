<template>
   <div class="container">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
   </div>
</template>

<script>
//components import
import ChatWindow from '../components/ChatWindow.vue';
import NewChatForm from '../components/NewChatForm.vue';
import Navbar from '../components/Navbar.vue';
//composable import
import getUser from '@/composables/getUser';
//vue import
import { watch } from 'vue';
//vue router import
import { useRouter } from 'vue-router';
export default {
   components: { Navbar, NewChatForm, ChatWindow },
   setup() {
      const { user } = getUser();
      const router = useRouter();

      watch(user, () => {
         if (!user.value) {
            router.push({ name: 'welcome' });
         }
      });
   },
};
</script>

<style></style>
