import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import City from '@/components/City'
import Film from '@/components/Film'
import Cinema from '@/components/Cinema'
import User from '@/components/User'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    { path: '/login', name: 'Login', component: Login },
    { path: '/city', name: 'City', component: City },
    { path: '/film', name: 'Film', component: Film },
    { path: '/cinema', name: 'Cinema', component: Cinema },
    { path: '/user', name: 'User', component: User },
    { path: '/card', name: 'Card', component: Card },
    { path: '/*', redirect:Home },
  ]
})
