import Vue from 'vue';
import Vuex from 'vuex';
import Character from './classes/character';
// import dndService from './services/dnd-service';

Vue.use(Vuex);

const characterCreationSteps = {
  createStubCharacter: 1
};

interface State {
  character: Character;
  characterCreationStep: number;
}

class CharacterStore {
  state: State = {
    character: new Character({}),
    characterCreationStep: 0
  };

  private mutations = {
    updateCharacterStorage: () => {
      localStorage.setItem('character', JSON.stringify(this.state.character));
    },
    updateCharacter: character => {
      this.state.character = new Character(character);
    },
    updateCharacterCreationStep: characterCreationStep => {
      this.state.characterCreationStep = characterCreationStep;
    },
    setStats: values => {
      this.state.character.setStats(values);
    },
    setProficiencies: values => {
      console.log(this.state.character);
      this.state.character.setProficiencies(values);
    },
    setItems: values => {
      this.state.character.setItems(values);
    },
    setSpells: values => {
      this.state.character.setSpells(values);
    }
  };


  createStubCharacter({ name, characterClass }) {
    const character = new Character({ name, characterClass });
    this.updateCharacterCreationStep(
      characterCreationSteps.createStubCharacter
    );
    this.mutations.updateCharacter(character);
    this.mutations.updateCharacterStorage();
  }

  updateCharacterCreationStep(step) {
    localStorage.setItem('characterCreationStep', step);
    this.mutations.updateCharacterCreationStep(step);
  }

  getCharacter() {
    this.mutations.updateCharacter(
      JSON.parse(localStorage.getItem('character') || '{}')
    );
  }

  getCharacterCreationStep() {
    this.mutations.updateCharacterCreationStep(
      parseInt(localStorage.getItem('characterCreationStep') || '0', 10)
    );
  }

  setStats(values) {
    this.mutations.setStats(values);
    this.mutations.updateCharacterStorage();
  }

  setProficiencies(values) {
    this.mutations.setProficiencies(values);
    this.mutations.updateCharacterStorage();
  }

  selItems(values) {
    this.mutations.setItems(values);
    this.mutations.updateCharacterStorage();
  }

  setSpells(values) {
    this.mutations.setSpells(values);
    this.mutations.updateCharacterStorage();
  }
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
//       this.actions.updateCharacterCreationStep', characterCreationSteps.createStubCharacter);
//       this.mutations.updateCharacter', character);
//       this.actions.updateCharacterStorage');
//     },
//     updateCharacterCreationStep({ commit }, step) {
//       localStorage.setItem('characterCreationStep', step);
//       this.mutations.updateCharacterCreationStep', step);
//     },
//     getCharacter({ commit }) {
//       this.mutations.updateCharacter', JSON.parse(localStorage.getItem('character') || null));
//     },
//     getCharacterCreationStep({ commit }) {
//       this.mutations.updateCharacterCreationStep', parseInt(localStorage.getItem('characterCreationStep') || 0, 10));
//     },
//     setStats(values) {
//       this.mutations.setStats', values);
//       this.actions.updateCharacterStorage');
//     },
//     setProficiencies(values) {
//       this.mutations.setProficiencies', values);
//       this.actions.updateCharacterStorage');
//     },
//     selItems(values) {
//       this.mutations.setItems', values);
//       this.actions.updateCharacterStorage');
//     },
//     setSpells(values) {
//       this.mutations.setSpells', values);
//       this.actions.updateCharacterStorage');
//     }
//   }
// });
