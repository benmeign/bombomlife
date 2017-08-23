import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Moments from '@/profile/Mymoments'
import Welcome from '@/components/welcome'
import SignUp from '@/auth/SignUp'
import Login from '@/auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/mymoments',
      name: 'My Moments',
      component: Moments
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
