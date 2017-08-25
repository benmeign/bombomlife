// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import router from './router'
import Moments from './profile/Mymoments'
import libmoment from 'moment'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'


Vue.config.productionTip = false
Vue.use(Buefy)


Vue.filter('formatDate', function (value) {
  if (value) {
    return libmoment(String(value)).format('MM/DD/YYYY')
  }
});

Vue.filter('lengthOfArray', function (array) {
  return array.length
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    user: null
  },
  template: '<App/>',
  components: { App }
})
