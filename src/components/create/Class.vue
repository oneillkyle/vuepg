<template>
  <div>
    <input v-model="name" placeholder="Character Name">

    <div>Character Class</div>
    <div class="flex-nowrap-row">
      <div class="flex-item-half">
        <div v-for="characterClass of characterClasses" :key="characterClass.name">
          <input
            type="radio"
            :id="characterClass.name"
            :value="characterClass.url"
            v-model="selectedCharacterClass"
          >
          <label :for="characterClass.name">{{characterClass.name}}</label>
          <br>
        </div>
      </div>

      <div class="flex-item-half">
        <ul v-if="characterClassDetails">
          <li>{{ characterClassDetails.name }}</li>
          <li>Hit Die: {{ characterClassDetails.hit_die }}</li>
          <li>Subclasses
            <ul>
              <li
                v-for="subclass of characterClassDetails.subclasses"
                :key="subclass.url"
              >{{ subclass.name }}</li>
            </ul>
          </li>
          <li>Proficiencies
            <ul>
              <li
                v-for="proficiency of characterClassDetails.proficiencies"
                :key="proficiency.url"
              >{{ proficiency.name }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <button @click="selectCharacter">Next</button>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const AppProps = Vue.extend({
  props: {
    characterClasses: Array,
    characterClassDetails: Object,
    initialName: String,
    initialCharacterClass: String
  }
});
@Component({
  components: {},
  watch: {
    selectedCharacterClass(val) {
      this.$emit('getCharacterDetails', val);
    }
  }
})
export default class CreateClass extends AppProps {
  // name = 'create-class';
  name = '';
  selectedCharacterClass = '';
  created() {
    this.name = this.initialName;
    this.selectedCharacterClass = this.initialCharacterClass;
  }
  selectCharacter() {
    if (this.name && this.selectedCharacterClass) {
      this.$emit('selectCharacter', {
        name: this.name,
        selectedCharacterClass: this.selectedCharacterClass,
        characterClassDetails: this.characterClassDetails
      });
    }
  }
}
</script>

<style scoped>
</style>
