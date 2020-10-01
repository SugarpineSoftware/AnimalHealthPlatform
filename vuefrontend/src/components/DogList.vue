<template>
  <div class="dogList">
    <h1 v-for="(item, index) in this.$store.state.dogs" :key="index">{{item}}</h1>
  </div>
</template>

<script>
export default {
  name: 'DogList',
  props: {
    
  },
  mounted() {
    this.$store.dispatch('loadDogs')
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>