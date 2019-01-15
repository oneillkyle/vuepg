<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Get Started</h2>
    <ul>
      <li>
        <router-link to="create">Create My Character</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const AppProps = Vue.extend({
  props: {}
});
@Component({
  components: {}
})
export default class Hello extends AppProps {
  name = 'hello';
  msg = 'Welcome VuePG - A Simply Silly RPG';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
