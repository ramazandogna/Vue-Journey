import { createRouter, createWebHashHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';

const routes = [
   {
      path: '/',
      name: 'welcome',
      component: Welcome,
   },
   {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/ChatRoom.vue'),
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
