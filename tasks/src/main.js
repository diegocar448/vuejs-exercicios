import Vue from 'vue'
import App from './App.vue'
//importar o boostrap para o vuejs
import BootstrapVue from 'bootstrap-vue'
//importar as bibliotecas css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//adicionando o bootstrap ao vuejs
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
