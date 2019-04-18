import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Team from './views/Team.vue'
import ELand from '@/views/ELand.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/eland',
      name: 'eland',
      component: ELand
    }
  ]
})
