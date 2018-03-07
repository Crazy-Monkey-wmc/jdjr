import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/index.vue'
import Financing from './pages/financing/index.vue'
import IOU from './pages/IOU/index.vue'
import Crowdfunding from './pages/crowdfunding/index.vue'
import Mine from './pages/mine/index.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/financing',
      name: 'financing',
      component: Financing
    },
    {
      path: '/IOU',
      name: 'IOU',
      component: IOU
    },
    {
      path: '/crowdfunding',
      name: 'crowdfunding',
      component: Crowdfunding
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})