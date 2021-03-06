// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import Notifications from 'vue-notification'
import Router from 'vue-router'
import App from './App'
import store from './store'
import Editor from './components/Editor'
import { sync } from 'vuex-router-sync'
import VModal from 'vue-js-modal'
Vue.config.productionTip = false

Vue.use(Vue2Filters)
Vue.use(Notifications)
Vue.use(Router)
Vue.use(VModal)

const router = new Router({
  routes: [
    { name: 'root', path: '/', component: Editor },
    { name: 'saved', path: '/s/:id', component: Editor }
  ]
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
