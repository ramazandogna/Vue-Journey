import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/add',
      name: 'AddPost',
      component: () => import('../views/AddPost.vue'),
   },
   {
      path: '/projects/:id',
      name: 'EditProject',
      component: () => import('../views/EditProject.vue'),
      props: true,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
