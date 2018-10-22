import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue);

Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App)
})
