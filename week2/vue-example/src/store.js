import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searches: [],
  },
  getters: {
    searches: state => state.searches,
  },
  mutations: {
    addSearchRecord(state, record) {
      state.searches.push(record);
    },
  },
  actions: {
    addSearchRecord(context, record) {
      context.commit('addSearchRecord', record);
    },
  },
});
