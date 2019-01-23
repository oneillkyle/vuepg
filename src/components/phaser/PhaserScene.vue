<template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { SimpleGame } from './phaser-class';

import { DndService } from '../../services/dnd-service';

const AppProps = Vue.extend({
  props: {}
});
@Component({
  components: {}
})
export default class PhaserScene extends AppProps {
  name = 'entry-scene';
  created() {
    new SimpleGame();
  }
  
}
</script>

<style scoped>
.fullscreen {
  height: 100vh;
  position: relative;
}
</style>
