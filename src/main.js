// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入全局less
import './assets/common/less/base.less'
import './assets/common/css/cpc-highlight.css'
// 引入风格UI
import './assets/common/less/relief.less'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入vue-lazyLoad
import lazyLoad from 'vue-lazyload'

// 引入公共组件
import './assets/common/js/source'

// 引入工具类
import Tools from './assets/common/js/tools'

// 引入全局消息提示
import MessageReminder from './components/message-reminder/message-reminder'

Vue.use(lazyLoad, {
  loading: '/static/loading.gif',
  error: '/static/error.png'
})

Vue.config.productionTip = false

Vue.prototype.$Tools = Tools
// 消息弹窗
Vue.prototype.$Tips = MessageReminder.config({
  message: '消息提醒',
  duration: 3000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 路由跳转配置
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})

let ruler = `%cWelcome %cto %ccpc %ccomponent %clibrary`
let css1 = `color:red;font-size:18px;text-shadow:4px 4px 4px #ff8e8e`
let css2 = `color:#ff00a5;font-size:18px;text-shadow:4px 4px 4px #ff68ca`
let css3 = `color:#a900ff;font-size:18px;text-shadow:4px 4px 4px #dd95ff`
let css4 = `color:#5600ff;font-size:18px;text-shadow:4px 4px 4px #b084fb`
let css5 = `color:#00adff;font-size:18px;text-shadow:4px 4px 4px #84d7ff`
console.log(ruler, css1, css2, css3, css4, css5)
