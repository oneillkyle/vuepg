<template>
    <div>
      <div>Character Proficiencies</div>
      <div class="flex-nowrap-row">
        <div class="flex-item-half" v-for="(profSet, index) of proficiencyChoices" :key="index">
          <span v-if="!checkSelected(index, profSet.choose)">Please Select {{ profSet.choose }}</span>
          <div v-for="prof of profSet.from" :key="prof.name">
            <input type="checkbox" :id="prof.name" :value="prof" v-model="selectedProficiencies[index]">
            <label :for="prof.name">{{prof.name}}</label>
            <br>
          </div>
        </div>
      </div>
      <button @click="selectProficiencies">Next</button>
    </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
import Vue from 'vue';
import Component from 'vue-class-component';
// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }

const AppProps = Vue.extend({
  props: {
    proficiencyChoices: Array
  }
});
@Component({
  components: {}
  // Vuex's component binding helper can use here
  // computed: mapState([
  //   'count'
  // ]),
  // methods: mapMutations([
  //   'increment'
  // ])
})
export default class Proficiencies extends AppProps {
  name: string = 'create-proficiencies';
  selectedProficiencies: any[] = [];
  proficienciesSelectedNumber: any[] = [];
  proficiencyChoices: any[] = [];

  created() {
    this.selectedProficiencies = this.proficiencyChoices.map(() => []);
    this.proficienciesSelectedNumber = this.proficiencyChoices.map(() => false);
  }

  selectProficiencies() {
    if (!this.proficienciesSelectedNumber.includes(false)) {
      const flat: any[] = [];
      this.selectedProficiencies.map(profs => {
        profs.map((prof: any) => {
          flat.push(prof);
          return prof;
        });
        return profs;
      });
      this.$emit('proficienciesSelected', flat);
    }
  }

  checkSelected(index: number, count: number) {
    const correctAmount =
      (this.selectedProficiencies[index]
        ? this.selectedProficiencies[index].length
        : 0) === count;
    this.proficienciesSelectedNumber[index] = correctAmount;
    return correctAmount;
  }
}

// const AppProps = Vue.extend({
//   props: {
//     propMessage: String
//   }
// })
// @Component({
//   components: {
//     Hello,
//     World
//   },
//   // Vuex's component binding helper can use here
//   computed: mapState([
//     'count'
//   ]),
//   methods: mapMutations([
//     'increment'
//   ])
// })
// export default class App extends AppProps {
//   // inital data
//   msg: number = 123
//   // use prop values for initial data
//   helloMsg: string = 'Hello, ' + this.propMessage
//   // annotate refs type
//   $refs!: {
//     helloComponent: Hello
//   }
//   // additional declaration is needed
//   // when you declare some properties in `Component` decorator
//   count!: number
//   increment!: () => void
//   // lifecycle hook
//   mounted () {
//     this.greet()
//   }
//   // computed
//   get computedMsg () {
//     return 'computed ' + this.msg
//   }
//   // method
//   greet () {
//     alert('greeting: ' + this.msg)
//     this.$refs.helloComponent.sayHello()
//   }
//   // direct dispatch example
//   incrementIfOdd () {
//     this.$store.dispatch('incrementIfOdd')
//   }
// }
</script>

<style scoped>
</style>
