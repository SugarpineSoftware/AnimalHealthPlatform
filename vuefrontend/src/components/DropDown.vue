<template>
<div class="filter">
  <label for="basic-dropdown">List of Dogs: </label>
  <select name="basic-dropdown">
    <option v-for="(dog, name) in this.$store.state.dogs.message" :value="dog" :key="name">{{name}}</option>
  </select>
</div>
</template>
<script>
export default {
  name: 'DropDown',
  props: {
    
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>