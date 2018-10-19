//routes (rotas) podemos definir como url(s) amigaveis
//vamos importar os components
import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Error404Component from './components/Error404Component'

export default [
    //cada json representa uma url
    {path: '/', component:HomeComponent},
    {path: '/produtos', component:ProductsComponent, name: 'products'},
    //rota com parametro
    {path: '/tarefa/:id/', component:TasksComponent, name: 'task', props: true},
    {path:'/redirect', redirect:'/produtos'},
    //com * vai valer para todas as rotas
    {path:'*', component: Error404Component}
]


