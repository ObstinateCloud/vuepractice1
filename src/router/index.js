import Vue from 'vue'
import Router from 'vue-router'
import HomeMenu from '@/components/HomeMenu'
import Container from '@/components/Container'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeMenu',
      component: HomeMenu
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
