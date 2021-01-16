import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes/routes'

import store from './store/store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import UniqueId from 'vue-unique-id';

Vue.use(UniqueId);



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.config.productionTip = false


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
