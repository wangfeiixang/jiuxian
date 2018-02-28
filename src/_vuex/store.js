
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
		console.log("store detail",state.goods,"ele",ele.count,ele.lastCount);
		state.detailNum = ele.count;
		if (state.goods.length==0) { //这是先将详情页面的物品加入购物车
			state.goods.push(ele);
			commonFun.totalNum(state.goods);
		} else { //列表页面的物品加入购物车
			for (let i = 0; i < state.goods.length; i++) {
				
				// console.log("列表页面数量",ele.count);
				if ( ele.id == state.goods[i].id ) { //相同的物品

					if ( state.goods[i].judge && state.goods[i].judge==1 ) {
						state.goods[i].count += ele.count;
						state.goods[i].judge =2;
					} else {
						state.goods[i].count += ele.lastCount;
					}

					// console.log( "goods",state.goods[i].count,"ele",ele.count,ele.lastCount );

					break;

				}
			}

			commonFun.totalNum(state.goods);
		}
		
		

		

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
	
	},
	checkAll(state,type){
		// console.log("store checkall",type);
		let Oaccount  = document.getElementById("accont");
		let OaccontNum  = document.getElementById("accontNum");
		for (let i = 0; i < state.goods.length; i++) {
			if ( type===true ) {
				state.goods[i].isCheck = true;
				commonFun.totalNum(state.goods);
			} else {
				state.goods[i].isCheck = false;
				Oaccount.style.background="#fd5a5b";
				state.totalNum = 0;
				state.totalPrice = 0;
			}
			
		}
		
	},
	addCount(state,id){ //购物车页面数量相加		
		for(let i =0;i<state.goods.length;i++){
			// console.log(state.goods[i]);
			if ( state.goods[i].id==id ) {
				state.goods[i].count++;
				break;
			} 
		}
		commonFun.totalNum(state.goods)

		// console.log("store shopping 购物车相加",id,state.goods);
	},
	reduceCount(state,id){ //购物车页面数量相减
		for(let i =0;i<state.goods.length;i++){
			// console.log(state.goods[i]);
			if ( state.goods[i].id==id ) {
				
				if ( state.goods[i].count==1 ) {
					state.goods[i].count = 1;
				} else {
					state.goods[i].count--;
				}
				break;
			} 
		}
		commonFun.totalNum(state.goods)
        // console.log( "store shopping 购物车相减",id )
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
