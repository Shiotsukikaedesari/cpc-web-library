// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入公共组件
import './assets/common/js/source'

// 引入工具类
import Tools from './assets/common/js/tools'
// 引入全局less
import './assets/common/less/base.less'

Vue.config.productionTip = false

Vue.prototype.$tools = Tools

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
