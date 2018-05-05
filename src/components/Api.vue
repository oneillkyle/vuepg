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

<script>
import dndService from '../services/dnd-service';

export default {
  name: 'api',
  data() {
    return {
      baseRoutes: Object.keys(dndService.endpoints),
      childRoutes: [],
      indexRoute: null
    };
  },
  methods: {
    getRoute(route) {
      dndService.getResource(route).subscribe(response => {
        console.log(response);
        this.childRoutes = response.data.results;
      });
    },
    getIndex(url) {
      dndService.getResourceByUrl(url).subscribe(response => {
        console.log(response);
        this.indexRoute = response.data;
      });
    }
  },
  filters: {
    pretty(value) {
      return JSON.stringify(value, null, 2);
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
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
