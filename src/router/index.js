import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '@/components/Login'
import ContainerDetails from '@/components/ContainerDetails'
import NotFound from '@/components/NotFound'
import MappingData from '@/components/MappingData'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: location.hostname.match(/localhost/)?'':'/registry/',
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
      name: 'ContainerDetails',
      component: ContainerDetails
    },
    {
      path: '/mappingdata',
      name: 'MappingData',
      component: MappingData
    },
    {
      path:'*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})
