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

<script>
export default {
  name: 'create-proficiencies',
  props: {
    proficiencyChoices: Array
  },
  data() {
    return {
      selectedProficiencies: [],
      proficienciesSelectedNumber: []
    };
  },
  created() {
    this.selectedProficiencies = this.proficiencyChoices.map(() => []);
    this.proficienciesSelectedNumber = this.proficiencyChoices.map(() => false);
  },
  computed: {
  },
  methods: {
    selectProficiencies() {
      if (!this.proficienciesSelectedNumber.includes(false)) {
        const flat = [];
        this.selectedProficiencies.map(profs => {
          profs.map(prof => {
            flat.push(prof);
            return prof;
          });
          return profs;
        });
        this.$emit('proficienciesSelected', flat);
      }
    },
    checkSelected(index, count) {
      const correctAmount = (
        this.selectedProficiencies[index]
          ? this.selectedProficiencies[index].length
          : 0) === count;
      this.proficienciesSelectedNumber[index] = correctAmount;
      return correctAmount;
    }
  }
};
</script>

<style scoped>

</style>
