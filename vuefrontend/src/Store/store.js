import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        dogs: [],
        dogURL: [],
        selectedBreed: 'All'
    },
    actions: {
        // loading the list of all dogs... (Go to heaven) //
        async loadAllDogs({commit}) {
            return new Promise((resolve, reject) => {
                Axios.get('https://dog.ceo/api/breeds/list/all').then(data => {
                    let dogs = data.data
                    commit('SET_DOGS', dogs)
                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject()
                })
            })
        },

        // loading all the dog imates - So this is interesting, //
        // Upon calling this, it then launches loadAllDogs then waits for //
        // that to finish then gets the dog names // 
        // then goes through the array of names and pulls all the images //
        // from that. //
        async loadAllDogImages({dispatch}){
            await dispatch('loadAllDogs')
            let dogArray = this.state.dogs.message
            for(var i in dogArray){
                await dispatch('loadDogImagesByBreed', {'breed': i})
            }
        },
        
        // calls on the API to return a random URL for each breed //
        async loadDogImagesByBreed({commit}, dogBreed){
            let breed = dogBreed.breed
            Axios.get('https://dog.ceo/api/breed/' + breed + '/images/random').then(data => {
                let url = {'breed': breed, 'data' :data.data.message}
                commit('SET_URL', url)
                
            }).catch(error => {
                console.log('Error ->' + error)
            })
        },


        // modifys the currently selected dog breed //
        modifyDogBreed({commit}, dogBreed){
            commit('SET_DOGBREED', dogBreed.breed)
        }
        
    },
    mutations:{
        SET_DOGS (state, dogs) {
            var tempDogNameArray = dogs
            state.dogs = tempDogNameArray
        },
        SET_URL (state, dogURL) {
            let tempDogArray = state.dogURL
            tempDogArray.push(dogURL)
            state.dogURL = tempDogArray
        },
        SET_DOGBREED (state, dogBreed) {
            state.selectedBreed = dogBreed
            
        }
    }
})

