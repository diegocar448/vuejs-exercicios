//é nesse arquivo que ficará as rotas

import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/products/ProductComponent'
import ProductCreateComponent from '../components/products/ProductCreateComponent'
import ProductEditComponent from '../components/products/ProductEditComponent'

export default[
    {path: '/', component: HomeComponent},
    {path: '/product', component: ProductComponent},
    {path: '/product/create', component: ProductCreateComponent},
    //informar que o props é true, para confirmar que vai enviar o props para a regra em ProductEditComponent.vue
    {path: '/product/:id/edit', component: ProductEditComponent, name:'product.edit', props:true},
]