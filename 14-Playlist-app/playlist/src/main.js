//vue
import { createApp } from 'vue';
import App from './App.vue';
//router
import router from './router';
// vuex
import store from './store';
// main css
import './assets/main.css';

createApp(App).use(store).use(router).mount('#app');
