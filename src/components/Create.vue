<template>
  <div class="hello">
    <h1>Create Your Character</h1>
    <div>
      <create-class v-if="characterCreationStep === 0"
        :characterClasses="characterClasses"
        :characterClassDetails="characterClassDetails"
        :initialName="character.name"
        :initialCharacterClass="character.characterClass.url"
        @selectCharacter="onSelectCharacter"
        @getCharacterDetails="onGetCharacterDetails"></create-class>

      <button v-if="characterCreationStep > 0" type="button" @click="back">Back</button>
      {{character}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import dndService from '../services/dnd-service';
import CreateClass from './create/Class';

export default {
  name: 'create',
  data() {
    return {
      characterClasses: [],
      characterClassDetails: null
    };
  },
  created() {
    dndService.getResource('classes').subscribe(response => {
      this.characterClasses = response.data.results;
    });
  },
  computed: {
    character() {
      return this.$store.state.character;
    },
    characterCreationStep() {
      return this.$store.state.characterCreationStep;
    }
  },
  methods: {
    ...mapActions(['createStubCharacter', 'updateCharacterCreationStep']),
    onSelectCharacter({ name, selectedCharacterClass, characterClassDetails }) {
      console.log(name, selectedCharacterClass, characterClassDetails);
      this.createStubCharacter({
        name,
        characterClass: characterClassDetails
      });
    },
    onGetCharacterDetails(url) {
      this.characterClassDetails = null;
      dndService.getResourceByUrl(url).subscribe(response => {
        this.characterClassDetails = response.data;
      });
    },
    back() {
      this.updateCharacterCreationStep(this.characterCreationStep - 1);
    }
  },
  components: { CreateClass }
};
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
