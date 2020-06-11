import Vue from 'vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.less'

// vue-lazyload 懒加载插件
// vue-virtual-scroll-list 和 vue-virtual-scroller 优化滚动插件

/** webpack */
// CommonsChunkPlugin webpack内置的专门用于提取多个Chunk 中的公共部分的插件

Vue.use(router)
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.commit('changeDefaultActive', to.path)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
