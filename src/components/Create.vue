<template>
  <div class="hello">
    <h1>Create Your Character</h1>
    <div>
      <input v-model="name" placeholder="Character Name">
      
      <div>Character Class</div>
      <input type="radio" id="mage" value="mage" v-model="characterClass">
      <label for="mage">Mage</label>
      <br>
      <input type="radio" id="jester" value="jester" v-model="characterClass">
      <label for="jester">Jester</label>
      <br>

      <button @click="create">Create!</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'create',
  data() {
    return {
      name: '',
      characterClass: ''
    };
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
