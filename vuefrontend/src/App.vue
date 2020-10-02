<template>
  <div id="app">
      <!-- Displaying the DogList Component -->
      <DogList/>
  </div>
</template>

<script>
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
  font-family: Rockwell, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4b7eb1;
  margin-top: 60px;
}
</style>
