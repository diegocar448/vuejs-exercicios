import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import Vuex from 'vuex'


Vue.use(Vuex)



new Vue({
  el: '#app', 
  router,
  render: h => h(App)
})
