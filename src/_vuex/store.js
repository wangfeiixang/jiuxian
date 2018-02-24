
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
	totalNum:0,//总数量
	totalPrice:0,//总价
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
		// let num = 0;
		// num += ele.count;/* 单个物品数量 */
		// state.detailNum = num;
		// state.totalNum = state.detailNum+state.listNum;
		// state.detailGood = ele;
		
		// let listGoods = state.goods;
		// let detailGoods = state.detailGood;
		// let listGoodSwitch = true;

		// if (state.goods.length===0) { /* 判断列表页是否加入购物车  */
		// 	// console.log("detail store中列表页没加入购物车")
		// 	listGoodSwitch = true;
		// } else {

		// 	for (let i = 0; i < listGoods.length; i++) {

		// 		if ( listGoods[i].id===detailGoods.id ) {
		// 			// console.log("相同商品",listGoods[i])
		// 			listGoods[i].count = detailGoods.count;
		// 			listGoodSwitch = false;
		// 			break;
		// 		}
		// 	}
			
		// 	// console.log("detail store中列表页加入购物车")
		// }

		// if (listGoodSwitch) {
		// 	listGoods.push(detailGoods);
		// 	state.goods = listGoods;
		// } 
		
		// console.log( "detail添加商品","列表页",listGoods,"详情页",detailGoods );
		
	},
	addGoods(state,goods){//列表页加入购物车
		state.goods = goods;
		commonFun.totalNum(state.goods)
		// console.log("shopping list",goods);
		
		
		// state.goods = goods;
	// 	let good = state.goods;
	// 	let num = 0;
	// //	console.log( good )
	// 	for (let i = 0; i < good.length; i++) {
	// 		//console.log( good[i] ) 
	// 		num += good[i].count;
	// 	}

	// 	state.listNum = num;

	// 	if ( state.detailNum ===0 ) {
	// 		state.totalNum = state.listNum ;
	//     }else{
	// 		state.totalNum = state.detailNum+state.listNum;
	// 	}

	// 	let listGoods = state.goods;
	// 	let detailGoods = state.detailGood;
	// 	let listGoodSwitch = true;

	// 	if (state.detailGood.length===0) { /* 判断详情页物品是否加入购物车  */
	// 		// console.log("detail store中列表页没加入购物车")
	// 		listGoodSwitch = true;
	// 	} else {

	// 		for (let i = 0; i < listGoods.length; i++) {

	// 			if ( listGoods[i].id===detailGoods.id ) {
	// 				// console.log("相同商品",listGoods[i])
	// 				listGoods[i].count += detailGoods.count;
	// 				listGoodSwitch = false;
	// 				break;
	// 			}
	// 		}
			
	// 		// console.log("detail store中列表页加入购物车")
	// 	}

	// 	if (listGoodSwitch) {
	// 		listGoods.push(detailGoods);

	// 		state.goods = listGoods;
	// 	} 


		
	// 	console.log("列表页",state.goods);
	// 	// console.log( "列表页添加商品","列表页",listGoods,"详情页",detailGoods );
	},
	checkAll(state,type){
		// console.log("store", type, state.goods);
		for (let i = 0; i < state.goods.length; i++) {
			if ( type===true ) {
				state.goods[i].isCheck = true;
			} else {
				state.goods[i].isCheck = false;
			}
			
		}
		
	},
	addCount(state,goods){
		console.log("store购物车",goods)
	},
	checkSingle(state,type){ //单选按钮
		// console.log("store radio",type);
		commonFun.totalNum(state.goods,type)
	}
	

}

const commonFun = { //提出公共方法
	totalNum(num,type){  //总共数量统计
		// console.log("totalNum",num,type);
		let goods = num;
		let allNum = 0;
		let allPrice = 0;

		for(let i=0;i<goods.length;i++){

			if( type==undefined ){
				allNum += goods[i].count;
				allPrice += goods[i].count*goods[i].price;
			}else{
				let id = type.id;
				let boolean = type.boolean;
				if( goods[i].id == id  ){

					if(boolean == false){
						allNum	= state.totalNum - goods[i].count;
						allPrice = state.totalPrice - goods[i].count*goods[i].price;
					}else{

						allNum	= state.totalNum + goods[i].count;
						allPrice = state.totalPrice + goods[i].count*goods[i].price;
					}
				
					// console.log("数量"+state.totalNum,"总价"+state.totalPrice);
					
				}
			}
			

			
		}
		
		state.totalNum = allNum;
		state.totalPrice = allPrice;

		// console.log("数量"+state.totalNum,"总价"+state.totalPrice);
	}
}

const getters = {
	changeTotalNum(state){
		console.log("gstters",state.totalNum);
		return state.totalNum++;
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	
})

export default store
