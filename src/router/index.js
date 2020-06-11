import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: _import('views/login/login'),
    name: 'login',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/home',
    component: _import('views/home/home'),
    name: 'home',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/imgs',
    component: _import('views/imgs/index'),
    name: 'imgs',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/typescript',
    component: _import('views/typescript/index'),
    name: 'typescript',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/live',
    component: _import('views/live/index'),
    name: 'live',
    meta: {
      keepAlive: true
    }
  }
]

export default new Router({
  routes
})
