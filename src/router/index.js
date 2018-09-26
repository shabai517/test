import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '@/components/Login'
import Containerdetails from '@/components/Containerdetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
