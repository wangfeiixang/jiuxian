
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
	totalNum:0,//总数量
	isAllCheck:true,//每个物品对应的单选按钮
	listNum:0,//list页面商品的数量
	detailNum:0,//detail页面商品的单个数量
	goods:[],//所有商品的集合
	detailGood: [], //detail页面的单个商品
	transition:true,//detail页面的控制开关
	goodNum:0,



}

const mutations = {
	getNum(state, ele){//详情页加入购物车
		// state.detailGood.push(ele);//单个商品
		let num = 0;
		num += ele.count;/* 单个物品数量 */
		state.detailNum = num;
		state.totalNum = state.detailNum+state.listNum;
		//console.log("详情页总数量", ele.id );
		/* if ( state.detailGood.length>0 ) {
			for (let i = 0; i < state.detailGood.length; i++) {
				console.log("id", state.detailGood[i].id, ele.id)
				if ( state.detailGood[i].id === ele.id ) {
					
					state.detailGood[i].count++;
					state.goodNum = state.detailGood[i].count;
					console.log("for循环", state.goodNum);
					
					state.transition = false;
					// break;
				} else{
					ele.count = ele.count-state.goodNum;
					console.log("different", ele.count, state.goodNum)
					state.detailGood.push(ele);// 单个商品 
				}
			}
		} 

		if ( state.transition ) {
			state.detailGood.push(ele);// 单个商品 
		}  */

		// console.log( "detail添加商品",state.detailGood  )
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
		
		// console.log("列表页",goods);
	},
	checkAll(state,type){
		console.log("store", type, state.goods);
		for (let i = 0; i < state.goods.length; i++) {
			if ( type===true ) {
				state.goods[i].isCheck = true;
			} else {
				state.goods[i].isCheck = false;
			}
			
		}
		
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
