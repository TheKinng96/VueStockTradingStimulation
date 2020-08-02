import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";

import {routes} from "@/routes";
import store from './store/store'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trading-simulator.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
