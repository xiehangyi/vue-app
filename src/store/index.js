import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user.js'
import home from './module/home.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    home
  }
})

export default store
