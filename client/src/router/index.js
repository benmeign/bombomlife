import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Moments from '@/components/Mymoments'
import Welcome from '@/components/welcome'
import SignUp from '@/components/SignUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mymoments',
      name: 'My Moments',
      component: Moments
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
