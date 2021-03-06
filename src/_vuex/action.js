
import Vue from 'vue'

const actions = {
    getNum({commit},info){//详情页加入购物车
        // console.log(info)
         let count = info.count;
         let lastCount = info.lastCount;
         let id = info.id;
         Vue.prototype.$axios.get('list.json')
            .then( (data)=>{
                // console.log("数据接收成功",data)
                data.data.list.forEach(ele => {
                    // console.log(ele);
                    if ( ele.number===id ) {
                        ele.count = count;
                        ele.lastCount = lastCount;
                        let good = {
                            title: ele.title,
                            price: ele.price,
                            img: ele.img,
                            count: ele.count,
                            id: ele.number,
                            isCheck:true,
                            lastCount:ele.lastCount
                        }
                        // console.log( "action",good )
                        commit("getNum",good);
                        return;
                    } 
                });
            })
            .catch( (error)=>{
                console.log('actions接收数据失败',error)
            })
       
    },
    addGoods({commit},goods){//列表页加入购物车
        commit("addGoods",goods)
    },
    checkAll({commit},type){//购物车中全选按钮
        commit("checkAll",type)
        // console.log( "action",type )
    },
    addCount({commit},id){ //购物车页面数量相加
        // console.log( "actions购物车相加",id )
        commit("addCount",id)
    },
    reduceCount({commit},id){ //购物车页面数量相减
        // console.log( "actions购物车相减",id )
        commit("reduceCount",id)
    },
    checkSingle({commit},type){//购物车中单选按钮
        commit("checkSingle",type)
        // console.log( "action",type )
    },
	
}

export default actions
