
<!--<template>
  <div class="dogList">
    <h1 v-for="(item, name) in this.$store.state.dogs.message" :key="item">{{name}}</h1>
    
  </div>
  
</template>-->
<template>
  <div id="container">
    <ul id="tiles-container" class="table">
      <li v-for="(item, index) in this.$store.state.dogURL" :key="index">
        <div>
          <img :src="item.data" alt="" contain height="200px" width="200px">
        </div>
        <div class="info">
          <h2>{{item.breed}}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DogList',
  props: {
    
  },
  mounted() {
    this.$store.dispatch('loadAllDogImages')
    this.$store.dispatch('loadDogImagesByBreed','affenpinscher')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>