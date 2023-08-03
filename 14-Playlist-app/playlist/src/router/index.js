//router imports
import { createRouter, createWebHistory } from 'vue-router';
//views import
import Home from '../views/Home.vue';
//firebase imports

import { projectAuth } from '@/firebase/config';

const requireAuth = (to, from, next) => {
   const user = projectAuth.currentUser;
   if (!user) {
      next({ name: 'login' });
   } else {
      next();
   }
};

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth,
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
   },
   {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/Signup.vue'),
   },
   {
      path: '/playlist/create',
      name: 'createplaylist',
      component: () => import('../views/playlist/CreatePlaylist.vue'),
      beforeEnter: requireAuth,
   },
   {
      path: '/playlist:id',
      name: 'playlistdetails',
      component: () => import('../views/playlist/PlaylistDetail.vue'),
      beforeEnter: requireAuth,
      props: true,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
