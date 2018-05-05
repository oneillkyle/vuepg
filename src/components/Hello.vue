<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Get Started</h2>
    <ul>
      <li><router-link to="create">Create My Character</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome VuePG - A Simply Stupid RPG'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
