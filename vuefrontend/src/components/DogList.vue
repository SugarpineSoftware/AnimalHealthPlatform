
import { setTimeout } from 'timers';
<template>
  <div id="container">
      <h1>Canine Breed Selection</h1>
      <!-- basic drop down for the dog breeds -->
      <label for="basic-dropdown">Search by dog breed: </label>
      <select name="basic-dropdown" @change="onChange($event)">
        <option value="All">All</option>
        <option v-for="(dog, name) in this.$store.state.dogs.message" :value="name" :key="name">{{upperCaseName(name)}}</option>
      </select>

    <!-- unordered list for the dog images and info -->
    <ul id="tiles-container" class="table">
      <li v-for="(item, index) in listFilter " :key="index">
        <div>
          <img :src="item.data" alt="">
        </div>
        
        <div class="info">
          <h2>{{upperCaseName(item.breed)}}</h2>
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

        this.upperCaseName(dogBreedSelected)
      },
      upperCaseName(name){
        let upperCaseFirstLetter = name.charAt(0).toUpperCase()
        let removedFirstLetterFromOriginal = name.slice(0, 1)
        let uppercaseFinalName = name.replace(removedFirstLetterFromOriginal, upperCaseFirstLetter)

        return uppercaseFinalName
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
        /*border: 2px solid rgb(80, 243, 255);*/
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    }

    ul li{
        list-style-type: none;
    }
</style>