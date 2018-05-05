<template>
  <div class="hello">
    <h1>Create Your Character</h1>
    <div>
      <input v-model="name" placeholder="Character Name">
      
      <div>Character Class</div>
      <div v-for="characterClass of characterClasses" :key="characterClass.name">
        <input type="radio" :id="characterClass.name" :value="characterClass.url" v-model="selectedCharacterClass">
        <label :for="characterClass.name">{{characterClass.name}}</label>
        <br>
      </div>

      <button @click="create">Next</button>

      {{character}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import dndService from '../services/dnd-service';

export default {
  name: 'create',
  data() {
    return {
      name: '',
      selectedCharacterClass: '',
      characterClasses: []
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
    ...mapActions([
      'createCharacter'
    ]),
    create() {
      if (this.name && this.characterClass) {
        this.createCharacter({
          name: this.name,
          characterClass: this.characterClass
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
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
  color: #35495E;
}
</style>
