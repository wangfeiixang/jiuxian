// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueLazyload
import VueLazyload from 'vue-lazyload'
//use custom directive
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/images/lazy.png',
  loading: '/static/images/lazy.png',
  attempt: 1,
  // listenEvents: [ 'touchmove','scroll', 'mousewheel','wheel' ]
})

//引入全局mint组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//无限滚动,加载数据
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

//加载动画
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);

//button按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);


//引入全局自定义UI组件
import MyUI from './components/common/index'
Vue.use(MyUI);

//使用vuex
import store from './_vuex/store'

//配置全局自定义过滤器
//import plug from './plug/index' 

//导入所有的过滤器变量
import * as plug from './plug/index'

// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(plug).forEach(key => {
    Vue.filter(key, plug[key])
})

//引入全局axios配置
import axios from 'axios'
axios.defaults.timeout = 5000;    //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           

//console.log( process.env.NODE_ENV )

axios.defaults.baseURL = 'http://192.168.2.91:9092/mock/'; 

Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
