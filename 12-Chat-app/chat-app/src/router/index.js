//vue router import
import { createRouter, createWebHistory } from 'vue-router';
//component import
import Welcome from '../views/Welcome.vue';
//firebase import
import { projectAuth } from '@/firebase/config';

const requireAuth = (to, from, next) => {
   let user = projectAuth.currentUser;
   console.log('current user in auth guard', user);
   if (!user) {
      next({ name: 'welcome' });
   } else {
      next();
   }
};

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
      beforeEnter: requireAuth,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
