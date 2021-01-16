import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import wordStore from './modules/wordStore'

export default new Vuex.Store({
   modules: {
    wordStore
   }
});