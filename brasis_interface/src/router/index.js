import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Intro from '@/views/Intro'
import End from '@/views/End'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/fim',
      name: 'end',
      component: End
    }
  ]
})
