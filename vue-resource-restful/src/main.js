import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//importar o arquivo de rotas index.js
import routes from './routes/index'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
  //mode:history para não aparecer a # hashtag na url
  mode:'history',
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
