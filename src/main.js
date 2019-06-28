import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// initialize firebase application
import firebase from './firebase.js' // eslint-disable-line

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import '../styles/main.scss'
Vue.use(Buefy)