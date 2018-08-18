import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import IntroView from '@/components/IntroView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    }
  ]
})
