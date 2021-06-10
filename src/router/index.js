import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game';
import Info from "@/views/Info";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Info' && JSON.parse(localStorage.getItem("userData"))) {
    next({
      path:'/game',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
