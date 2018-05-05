<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <div class="center">
        <img src="./assets/logo.png" alt="Vue.js PWA" class="main-image">
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('getCharacter');
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.center {
  text-align: center;  
}

.flex-wrap-row {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.flex-nowrap-row {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
}

.flex-item {
  flex: 1 1 auto;
}

.flex-item-full {
  flex: 1 0 100%;
}

.flex-item-half {
  flex: 1 0 50%;
}
</style>
