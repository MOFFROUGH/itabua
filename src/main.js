// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from '@/store/store'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/components/globals/Panel.vue'

Vue.use(Vuetify, { theme: {
  primary: '#FF9800',
  secondary: '#1E88E5',
  accent: '#90A4AE',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50'
}})

Vue.config.productionTip = false
Vue.component('panel', Panel)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
