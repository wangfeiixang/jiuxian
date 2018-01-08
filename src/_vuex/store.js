
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
	totalNum:0,//总数量
	listNum:0,//list页面商品的数量
	detailNum:0,//detail页面商品的单个数量
	goods:[],

}

const mutations = {
	getNum(state,ele){//详情页加入购物车
		let num = 0;
		num += ele.count;/* 单个物品数量 */
		state.detailNum = num;
		
		state.totalNum = state.detailNum+state.listNum;
		console.log( "详情页总数量",ele );
	},
	addGoods(state,goods){//列表页加入购物车
		state.goods = goods;
		let good = state.goods;
		let num = 0;
	//	console.log( good )
		for (let i = 0; i < good.length; i++) {
			//console.log( good[i] ) 
			num += good[i].count;
		}

		state.listNum = num;

		if ( state.detailNum ===0 ) {
			state.totalNum = state.listNum ;
	    }else{
			state.totalNum = state.detailNum+state.listNum;
		}
		
		console.log("列表页",goods);
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
