// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入MUI相关的资源
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

// 引入vantui插件
import Vant from 'vant'
import 'vant/lib/index.css';

import './assets/css/all.css'

Vue.use(Vant);

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
