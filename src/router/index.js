import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

const HomeContainer = () => import('../components/tabbar/HomeContainer.vue')
const MemberContainer = () => import('../components/tabbar/MemberContainer.vue')
const ShopcarContainer = () => import('../components/tabbar/ShopcarContainer.vue')
const SearchContainer = () => import('../components/tabbar/SearchContainer.vue')
// 二级列表
const news = () => import('../components/six/news.vue')

Vue.use(Router)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

Vue.use(axios)

Vue.prototype.$http = axios

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/news', component: news }
  ]
})
