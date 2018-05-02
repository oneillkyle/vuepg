import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count + 1,
    decrement: state => state.count - 1
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done)
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});

export { store as default };
