<template>
  <div class="hello">
    <h1>Create Your Character</h1>
    <div>
      <create-class v-if="step === 0"
        :characterClasses="characterClasses"
        :characterClassDetails="characterClassDetails"
        @selectCharacter="onSelectCharacter"
        @getCharacterDetails="onGetCharacterDetails"></create-class>

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
      step: 0,
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
    }
  },
  methods: {
    ...mapActions(['createCharacter']),
    onSelectCharacter({ name, selectedCharacterClass }) {
      console.log(name, selectedCharacterClass);
    },
    onGetCharacterDetails(url) {
      this.characterClassDetails = null;
      dndService.getResourceByUrl(url).subscribe(response => {
        this.characterClassDetails = response.data;
      });
    },
    create() {
      if (this.name && this.characterClass) {
        this.createCharacter({
          name: this.name,
          characterClass: this.characterClass
        });
      }
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
