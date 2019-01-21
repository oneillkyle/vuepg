<template>
  <div class="hello">
    <h1>Api Browser</h1>
    <ul>
      <li v-for="route of baseRoutes" :key="route" @click="getRoute(route)">
        <pre>{{route}}</pre>
      </li>
    </ul>
    <h2>Child Routes:</h2>
    <ul>
      <li v-for="route of childRoutes" :key="route.index" @click="getIndex(route.url)">
        <pre>{{route | pretty}}</pre>
      </li>
    </ul>
    <div v-if="indexRoute">
      <pre>{{indexRoute | pretty}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { DndService } from '../services/dnd-service';

const AppProps = Vue.extend({
  props: {}
});
@Component({
  components: {},
  filters: {
    pretty(value: string) {
      return JSON.stringify(value, null, 2);
    }
  }
})
export default class Api extends AppProps {
  name = 'api';
  dndService = new DndService();
  baseRoutes = Object.keys(this.dndService.endpoints);
  childRoutes = [];
  indexRoute = null;

  getRoute(route: string, id: string) {
    this.dndService.getResource(route, id).subscribe(response => {
      console.log(response);
      this.childRoutes = response.data.results;
    });
  }

  getIndex(url: string) {
    this.dndService.getResourceByUrl(url).subscribe(response => {
      console.log(response);
      this.indexRoute = response.data;
    });
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
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
