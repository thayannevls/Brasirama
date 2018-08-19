import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import IntroView from '@/components/IntroView'
import EndView from '@/components/EndView'

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
    },
    {
      path: '/fim',
      name: 'end',
      component: EndView
    }
  ]
})
