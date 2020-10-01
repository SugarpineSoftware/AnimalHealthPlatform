import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

// import {store} from './Store'

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  render: h => h(App),
}).$mount('#app')
