import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket'
import slider from './modules/slider'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    basket,
    slider
  }
})

export default store