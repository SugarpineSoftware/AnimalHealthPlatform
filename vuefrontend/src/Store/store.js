import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        dogs: [],
        dogURL: [],
        selectedBreed: 'Affenpinscher'
    },
    actions: {
        // loading the list of all dogs... (Go to heaven) //
        loadAllDogs({commit}){
            console.log('Loading dogs')
            Axios.get('https://dog.ceo/api/breeds/list/all').then(data => {
                let dogs = data.data
                commit('SET_DOGS', dogs)
            }).catch(error => {
                console.log(error)
            })
        },
        
        loadAllDogImagesByBreed({commit}, dogBreed){
            console.log('Dog breed ' + dogBreed)
            Axios.get('https://dog.ceo/api/breed/' + dogBreed + '/images/random').then(data => {
                let url = data.data.message
                console.log(url)
                commit('SET_URL', url)
            }).catch(error => {
                console.log(error)
            })
        },
        // modifys the currently selected dog breed //
        modifyDogBreed({commit}, dogBreed){
            commit('SET_DOGBREED', dogBreed)
        }
        
    },
    mutations:{
        SET_DOGS (state, dogs) {
            state.dogs = dogs
        },
        SET_URL (state, dogURL) {
            state.dogURL = dogURL
        },
        SET_DOGBREED (state, dogBreed) {
            state.selectedBreed = dogBreed
        }
    }
})

