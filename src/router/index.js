import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import demo from '@/components/demo'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
      {
      path: '/me',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
