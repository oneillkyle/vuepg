import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;
// Vue.config.ignoredElements = ['a-scene', 'a-entity', 'a-camera', 'a-box', 'a-sky', 'a-plane'];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
