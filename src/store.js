import Vue from 'vue';
import Vuex from 'vuex';
import Character from './classes/character';
// import dndService from './services/dnd-service';

Vue.use(Vuex);

const characterCreationSteps = {
  createStubCharacter: 1
};

const store = new Vuex.Store({
  state: {
    character: null,
    characterCreationStep: null
  },
  mutations: {
    updateCharacter: (state, character) => {
      state.character = character;
    },
    updateCharacterCreationStep: (state, characterCreationStep) => {
      state.characterCreationStep = characterCreationStep;
    }
  },
  getters: {
    // doneTodos: state => state.todos.filter(todo => todo.done)
  },
  actions: {
    createStubCharacter({ commit, dispatch }, { name, characterClass }) {
      const character = new Character({ name, characterClass });
      localStorage.setItem('character', JSON.stringify(character));
      commit('updateCharacter', character);
      dispatch('updateCharacterCreationStep', characterCreationSteps.createStubCharacter);
    },
    updateCharacterCreationStep({ commit }, step) {
      localStorage.setItem('characterCreationStep', step);
      commit('updateCharacterCreationStep', step);
    },
    getCharacter({ commit }) {
      commit('updateCharacter', JSON.parse(localStorage.getItem('character') || null));
    },
    getCharacterCreationStep({ commit }) {
      commit('updateCharacterCreationStep', parseInt(localStorage.getItem('characterCreationStep') || 0, 10));
    }
  }
});

export { store as default };
