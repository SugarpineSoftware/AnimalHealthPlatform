import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
    state: {
        dogs: []
    },
    actions: {
        loadDogs({commit}){
            console.log('Loading dogs')
            Axios.get('https://dog.ceo/api/breeds/list/all').then(data => {
                console.log(data.data.message)
                let dogs = data.data
                commit('SET_DOGS', dogs)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mutations:{
        SET_DOGS (state, dogs) {
            state.dogs = dogs
        }
    }
})

