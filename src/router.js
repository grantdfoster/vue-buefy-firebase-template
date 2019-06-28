import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/views/Navbar.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      components: {
        navbar: Navbar,
        main: Login
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        navbar: Navbar
      }
    }
  ]
})