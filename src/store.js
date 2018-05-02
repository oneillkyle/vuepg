import Vue from 'vue';
import Vuex from 'vuex';
import Character from './classes/character';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    character: null
  },
  mutations: {
    createCharacter: (state, { name, characterClass }) => {
      state.character = new Character({ name, characterClass });
    }
  },
  getters: {
    // doneTodos: state => state.todos.filter(todo => todo.done)
  },
  actions: {
    createCharacter({ commit }, { name, characterClass }) {
      console.log(name, characterClass);
      commit('createCharacter', { name, characterClass });
    }
  }
});

export { store as default };
