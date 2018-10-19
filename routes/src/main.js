import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//importar o arquivo routes.js de vue-routes
import routes from './routes'

Vue.use(VueRouter)

//receber o retorno da nossa configuração do vue-routers
const router = new VueRouter({
    //usamos o mode:history para remover o # e deixar a url mais amigavel para seo
    mode: 'history',
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
