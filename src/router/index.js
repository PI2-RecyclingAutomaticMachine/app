import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import { getToken } from '../lib/user';

Vue.use(VueRouter);

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

Router.beforeEach((to, from, next) => {
  const authenticated = !!getToken();
  if (to.matched.some(route => route.meta.auth) && !authenticated) {
    next('/get-in');
  } else if (authenticated &&
    (to.path === '/signup' ||
    to.path === '/login' ||
    to.path === '/get-in')) {
    next('/home');
  } else {
    next();
  }
});

export default Router;
