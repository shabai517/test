import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '@/components/Login'
import Containerdetails from '@/components/Containerdetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: location.hostname.match(/localhost/)?'':'/test/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/containerdetails',
      name: 'Containerdetails',
      component: Containerdetails
    }
  ]
})
