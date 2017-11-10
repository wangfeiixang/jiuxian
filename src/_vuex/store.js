
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
}

const mutations = {

}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
