import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/HomeComponent'
import TaskComponent from '../components/tasks/TaskComponent'

Vue.use(VueRouter)

//as definições de rotas e configurações

//receber um array com a rotas
const routes = [
    {path: '/', component: HomeComponent, name:'home'},
    {path: '/tasks', component: TaskComponent, name: 'tasks'},
]

export default new VueRouter({
  mode: 'history',
  routes
})