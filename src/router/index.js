import Vue from 'vue';
import Router from 'vue-router';
import Basic from '../../examples/basic';
import ComponentContent from '../../examples/component-content';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Basic',
      component: Basic,
    },
    {
      path: '/component-content',
      name: 'ComponentContent',
      component: ComponentContent,
    },
  ],
});
