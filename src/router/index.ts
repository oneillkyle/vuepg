import Vue from 'vue';
import Router from 'vue-router';

import Api from '../components/Api.vue';
import Create from '../components/Create.vue';
import Hello from '../components/Hello.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    }
  ]
});
