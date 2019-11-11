import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from "./router/index"

Vue.use(VueRouter);

let bus = new Vue();
Vue.prototype.$bus = bus;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
