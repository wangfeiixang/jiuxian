
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
	totalNum:0,
	goods:[],

}

const mutations = {
	getNum(state,ele){//详情页加入购物车
		state.totalNum = ele.count;/* 单个物品数量 */
		// console.log( state.totalNum );
	},
	addGoods(state,goods){//列表页加入购物车
		state.goods = goods;
		// console.log("goods",state.goods);
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
