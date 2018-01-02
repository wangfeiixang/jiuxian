
import Vue from 'vue'

const actions = {
    getNum({commit},info){//详情页加入购物车
        // console.log(info.el)
         let count = info.count;
         let id = info.id;
         Vue.prototype.$axios.get('list.json')
            .then( (data)=>{
                // console.log("数据接收成功",data)
                data.data.list.forEach(ele => {
                    // console.log(ele.number)
                    if ( ele.number===id ) {
                        ele.count = count;
                        // console.log( ele )
                        commit("getNum",ele);
                    } else {
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
    }
	
}

export default actions
