<template>
  <div id="app">
      <!-- Displaying the DogList Component -->
      <DogList/>
  </div>
</template>

<script>
//import {mapState} from 'vuex'
import DogList from './components/DogList.vue'

export default {
  name: 'App',
  components: {
    DogList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
