import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Information from '@/components/information/information'
import Information1 from '@/components/information/information1'
import Successful from '@/components/information/successful'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/information1',
      name: 'Information1',
      component: Information1
    },
    {
      path: '/successful',
      name: 'Successful',
      component: Successful
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
