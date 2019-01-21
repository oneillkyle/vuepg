<template>
  <div class="hello">
    <h1>Create Your Character</h1>
    <div>
      <create-class
        v-if="characterCreationStep === 0"
        :characterClasses="characterClasses"
        :characterClassDetails="characterClassDetails"
        :initialName="character.name"
        :initialCharacterClass="character.characterClass.url"
        @selectCharacter="onSelectCharacter"
        @getCharacterDetails="onGetCharacterDetails"
      ></create-class>

      <create-proficiencies
        v-if="characterCreationStep === 1"
        :proficiencyChoices="character.characterClass.proficiency_choices"
        @proficienciesSelected="proficienciesSelected"
      ></create-proficiencies>

      <button v-if="characterCreationStep > 0" type="button" @click="back">Back</button>
      <pre>{{character}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';
import { DndService } from '../services/dnd-service';
import CreateClass from './create/Class.vue';
import CreateProficiencies from './create/Proficiencies.vue';
import CreateStats from './create/Stats.vue';

const AppProps = Vue.extend({

});
@Component({
  components: {
    CreateClass,
    CreateProficiencies,
    CreateStats
  }
})
export default class Create extends AppProps {
  name = 'create';
  characterClasses = [];
  characterClassDetails = null;
  dndService = new DndService();

  created() {
    this.dndService.getResource('classes').subscribe(response => {
      this.characterClasses = response.data.results;
    });
  }

  get character() {
    return this.$store.state.character;
  }
  get characterCreationStep() {
    return this.$store.state.characterCreationStep;
  }

  createStubCharacter(character) {
    this.$store.dispatch('createStubCharacter', character);
  }

  updateCharacterCreationStep(characterCreationStep: number) {
    this.$store.dispatch('updateCharacterCreationStep', characterCreationStep);
  }
  setProficiencies(proficiencies) {
    this.$store.dispatch('setProficiencies', proficiencies);
  }

  onSelectCharacter({ name, selectedCharacterClass, characterClassDetails }) {
    console.log(name, selectedCharacterClass, characterClassDetails);
    this.createStubCharacter({
      name,
      characterClass: characterClassDetails
    });
  }
  onGetCharacterDetails(url: string) {
    this.characterClassDetails = null;
    this.dndService.getResourceByUrl(url).subscribe(response => {
      this.characterClassDetails = response.data;
    });
  }
  proficienciesSelected(proficiencies) {
    console.log(proficiencies);
    this.setProficiencies(proficiencies);
  }
  back() {
    this.updateCharacterCreationStep(this.characterCreationStep - 1);
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
