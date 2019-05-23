import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'
import todoApp from './moduls/todoApp.js'



Vue.use(Vuex)



export const store = new Vuex.Store({
  modules : {
    todoApp
  }
})