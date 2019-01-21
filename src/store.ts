import Vue from 'vue';
import Vuex from 'vuex';
import Character from './classes/character';
// import dndService from './services/dnd-service';

Vue.use(Vuex);

const characterCreationSteps = {
  createStubCharacter: 1
};

class CharacterStore {
  state = {
    character: Character,
    characterCreationStep: null
  };
  mutations = {
    updateCharacter: (state, character) => {
      state.character = new Character(character);
    },
    updateCharacterCreationStep: (state, characterCreationStep) => {
      state.characterCreationStep = characterCreationStep;
    },
    setStats: (state, values) => {
      state.character.setStats(values);
      state.character = { ...state.character };
    },
    setProficiencies: (state, values) => {
      console.log(state.character);
      state.character.setProficiencies(values);
      state.character = { ...state.character };
    },
    setItems: (state, values) => {
      state.character.setItems(values);
      state.character = { ...state.character };
    },
    setSpells: (state, values) => {
      state.character.setSpells(values);
      state.character = { ...state.character };
    }
  };
  actions = {
    updateCharacterStorage({ state }) {
      localStorage.setItem('character', JSON.stringify(state.character));
    },
    createStubCharacter({ dispatch, commit }, { name, characterClass }) {
      const character = new Character({ name, characterClass });
      dispatch('updateCharacterCreationStep', characterCreationSteps.createStubCharacter);
      commit('updateCharacter', character);
      dispatch('updateCharacterStorage');
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
    },
    setStats({ commit, dispatch }, values) {
      commit('setStats', values);
      dispatch('updateCharacterStorage');
    },
    setProficiencies({ commit, dispatch }, values) {
      commit('setProficiencies', values);
      dispatch('updateCharacterStorage');
    },
    selItems({ commit, dispatch }, values) {
      commit('setItems', values);
      dispatch('updateCharacterStorage');
    },
    setSpells({ commit, dispatch }, values) {
      commit('setSpells', values);
      dispatch('updateCharacterStorage');
    }
  };
}

export const store = new CharacterStore();

// const store = new Vuex.Store({
//   state: {
//     character: null,
//     characterCreationStep: null
//   },
//   mutations: {
//     updateCharacter: (state, character) => {
//       state.character = new Character(character);
//     },
//     updateCharacterCreationStep: (state, characterCreationStep) => {
//       state.characterCreationStep = characterCreationStep;
//     },
//     setStats: (state, values) => {
//       state.character.setStats(values);
//       state.character = { ...state.character };
//     },
//     setProficiencies: (state, values) => {
//       console.log(state.character);
//       state.character.setProficiencies(values);
//       state.character = { ...state.character };
//     },
//     setItems: (state, values) => {
//       state.character.setItems(values);
//       state.character = { ...state.character };
//     },
//     setSpells: (state, values) => {
//       state.character.setSpells(values);
//       state.character = { ...state.character };
//     }
//   },
//   getters: {
//     // doneTodos: state => state.todos.filter(todo => todo.done)
//   },
//   actions: {
//     updateCharacterStorage({ state }) {
//       localStorage.setItem('character', JSON.stringify(state.character));
//     },
//     createStubCharacter({ dispatch, commit }, { name, characterClass }) {
//       const character = new Character({ name, characterClass });
//       dispatch('updateCharacterCreationStep', characterCreationSteps.createStubCharacter);
//       commit('updateCharacter', character);
//       dispatch('updateCharacterStorage');
//     },
//     updateCharacterCreationStep({ commit }, step) {
//       localStorage.setItem('characterCreationStep', step);
//       commit('updateCharacterCreationStep', step);
//     },
//     getCharacter({ commit }) {
//       commit('updateCharacter', JSON.parse(localStorage.getItem('character') || null));
//     },
//     getCharacterCreationStep({ commit }) {
//       commit('updateCharacterCreationStep', parseInt(localStorage.getItem('characterCreationStep') || 0, 10));
//     },
//     setStats({ commit, dispatch }, values) {
//       commit('setStats', values);
//       dispatch('updateCharacterStorage');
//     },
//     setProficiencies({ commit, dispatch }, values) {
//       commit('setProficiencies', values);
//       dispatch('updateCharacterStorage');
//     },
//     selItems({ commit, dispatch }, values) {
//       commit('setItems', values);
//       dispatch('updateCharacterStorage');
//     },
//     setSpells({ commit, dispatch }, values) {
//       commit('setSpells', values);
//       dispatch('updateCharacterStorage');
//     }
//   }
// });
