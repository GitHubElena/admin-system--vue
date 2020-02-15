import Vue from 'vue'
import Vuex from 'vuex';
import{state,mutations }from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: true//仅限开发模式下开启

})