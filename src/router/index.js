import Vue from 'vue';
import Router from 'vue-router';
import SideHome from '@/components/side-home';
import Example from '@/components/example';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SideHome',
      component: SideHome,
    },
    {
      path: '/example',
      name: 'Example',
      component: Example,
    },
  ],
});
