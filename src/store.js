import Vue from 'vue';
import Vuex from 'vuex';
import Character from './classes/character';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    character: null
  },
  mutations: {
    createCharacter: (state, character) => {
      state.character = character;
    }
  },
  getters: {
    // doneTodos: state => state.todos.filter(todo => todo.done)
  },
  actions: {
    createCharacter({ commit }, { name, characterClass }) {
      const character = new Character({ name, characterClass });
      localStorage.setItem('character', JSON.stringify(character));
      commit('createCharacter', character);
    },
    getCharacter({ commit }) {
      commit('createCharacter', JSON.parse(localStorage.getItem('character') || null));
    }
  }
});

export { store as default };
