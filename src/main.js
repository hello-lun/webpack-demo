import Vue from 'vue';
import router from './router/index.js';
import App from './App.vue';
import 'vant/lib/index.css';

import './typeScript/index.ts';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
