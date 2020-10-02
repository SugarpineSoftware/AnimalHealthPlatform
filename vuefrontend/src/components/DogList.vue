
<template>
  <div id="container">

      <!-- basic drop down for the dog breeds -->
      <label for="basic-dropdown">Search by dog breed: </label>
      <select name="basic-dropdown" @change="onChange($event)">
        <option value="All">All</option>
        <option v-for="(dog, name) in this.$store.state.dogs.message" :value="name" :key="name">{{name}}</option>
      </select>

    <!-- unordered list for the dog images and info -->
    <ul id="tiles-container" class="table">
      <li v-for="(item, index) in listFilter " :key="index">
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
    selectedDogBreed: String
  },
  mounted() {
    this.$store.dispatch('loadAllDogImages')
  },
  computed: {

      // filtering by dog breed //
      listFilter() {
          var dogURL = this.$store.state.dogURL
          if(this.$store.state.selectedBreed == 'All'){
              return dogURL
          }
          return dogURL.filter(breed => {
              return breed.breed.toLowerCase().includes(this.$store.state.selectedBreed.toLowerCase())
          })
      }
  },

  methods: {
      onChange(event){
          let dogBreedSelected = event.target.value
          this.$store.dispatch('modifyDogBreed', {'breed': dogBreedSelected})
      }
  }
}
</script>

<!-- Styling for the collection view -->
<style scoped>
    #tiles-container {
        display: grid;
        max-width: 1280px;
        padding: 0 80px;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 16px;

        margin: 80px auto;
        
    }

    #tiles-container img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 12px;
    }

    ul li{
        list-style-type: none;
    }
</style>