import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game'
import Info from "../views/Info"

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/',
    name: 'Info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Game' && !JSON.parse(localStorage.getItem("userData"))) {
    next({
      path:'/info',
      query: {redirect: to.fullPath}
    })
  } else if (to.name === 'Info' && JSON.parse(localStorage.getItem("userData"))) {
    next({
      path:'/game',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
