// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bulma/css/bulma.css'
import App from './App'
import router from './router'
import Moments from './components/Mymoments'
import libmoment from 'moment'


Vue.config.productionTip = false


Vue.filter('formatDate', function(value) {
  if (value) {
  return libmoment(String(value)).format('MM/DD/YYYY hh:mm')
           }
}),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
