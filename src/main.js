import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'


import { createApp } from 'vue';
import {store} from './store/index';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

createApp(App).use(router).use(store).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';