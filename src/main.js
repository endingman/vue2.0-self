import Vue from 'vue'
import store from './vuex'
import VueRouter from 'vue-router'
import routes from './config/routes'
import App from './App'
import { sync } from 'vuex-router-sync'

import './assets/style/index.styl'

Vue.use(VueRouter)
// Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
// Vue.config.devtools = true;

const router = new VueRouter({
  routes
})

//路由拦截器
router.beforeEach((to, from, next) => {
  next()//执行下一步,一定要返回next()
})

sync(store, router)

const app = new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app')