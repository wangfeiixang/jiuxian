
import Vue from 'vue'
import Router from 'vue-router'

//index页面
const Main = ()=> import('@/components/main/main')

//详情页面
const Detail = ()=> import('@/components/detail/detail')

//列表页面
const List = ()=> import('@/components/list/list')

//购物车页面
const Shopping = ()=> import('@/components/shopping/shopping')

//我的页面：登录、注册
const Mine = ()=>import('@/components/mine/mine')
const Login = ()=>import('@/components/mine/login')
const Register = ()=>import('@/components/mine/register')

//分类页面
const Classify = ()=>import('@/components/classify/classify')

//主会场页面
const MainPlace = ()=>import('@/components/mainPlace/mainPlace')

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '*',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/mainPlace',
      name: 'mainPlace',
      component: MainPlace
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/mine',
      name: 'mine',
      component: Register,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      },{
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
