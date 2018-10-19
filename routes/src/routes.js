//routes (rotas) podemos definir como url(s) amigaveis
//vamos importar os components
import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'

export default [
    //cada json representa uma url
    {path: '/', component:HomeComponent},
    {path: '/produtos', component:ProductsComponent, name: 'products'},
    {path: '/tarefas', component:TasksComponent},
]


