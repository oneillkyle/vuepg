<template>
    <div>
      <div>Character Stats</div>
      <div class="flex-nowrap-row">
        <div class="flex-item-half">
        </div>

        <div class="flex-item-half">
          
        </div>
      </div>

      <button @click="selectProficiencies">Next</button>
    </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const AppProps = Vue.extend({
  props: {}
});
@Component({
  components: {}
})
export default class CreateStats extends AppProps {
  name = 'create-stats';
}
</script>

<style scoped>

</style>
