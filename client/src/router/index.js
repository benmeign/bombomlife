import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Moments from '@/profile/Mymoments'
import Welcome from '@/components/welcome'
import SignUp from '@/auth/SignUp'
import Login from '@/auth/Login'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
