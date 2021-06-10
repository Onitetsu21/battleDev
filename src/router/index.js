import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game';
import Info from "@/views/Info";

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

export default router
