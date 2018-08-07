import Vue from 'vue';
import Router from 'vue-router';

import Api from '@/components/Api';
import Create from '@/components/Create';
import Hello from '@/components/Hello';

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
