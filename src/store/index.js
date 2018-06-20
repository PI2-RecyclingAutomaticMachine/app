import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import operation from './operation';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    operation,
  },
});

export default store;
