//vue
import { createApp } from 'vue';
import App from './App.vue';
//router
import router from './router';
// vuex
import store from './store';
// main css
import './assets/main.css';
//firebase
import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged(() => {
   if (!app) {
      createApp(App).use(router).mount('#app');
   }
});
