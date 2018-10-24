<template>
    <div>
        <h1>{{ title }}</h1>

        <div class="row">
            <div class="col">
                <!-- Link para ir para productcreate-->
                <router-link class="btn btn-info btn-cre" to="product/create">Cadatrar Produto</router-link>                
            </div>

            <div class="col">
                <product-search-component @search="searchProduct"></product-search-component>
            </div>
        </div>

        
        
        <div class="alert alert-danger text-center" v-if="confirmDelete">
            <h2>Deseja realmente deletar?</h2>
            <hr>
            <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
        </div>

        <p>Total: <span>{{ products.total }}</span></p>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>#id</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th width="200">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.description}}</td>
                    <td>
                        <router-link 
                            :to="{name: 'product.edit', params:{
                                id: product.id
                            }}" 
                            class="btn btn-primary btn-sm">Editar
                        </router-link>
                        <a href="#" @click.prevent="confirmaDeleteProduct(product.id)" class="btn btn-sm btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <ul class="pagination">
            <li v-if="products.current_page -1 >= 1"  class="page-item">
                <a href="#" class="page-link" @click.prevent="pagination(products.current_page + -1)"> Voltar </a>
            </li>
            <li v-if="products.current_page < products.last_page"  class="page-item">
                <a href="#" class="page-link" @click.prevent="pagination(products.current_page + 1)"> Próxima Pagina </a>
            </li>
        </ul> -->

        <preloader-component :preloader="preloader">

        </preloader-component>

        <pagination-component 
            :pagination="products"
            :offset="offset"
            @paginate="getProducts"
            >

        </pagination-component>

        <!-- <div v-if="preloader">
            <img src="../../assets/preloader.gif" alt="Preloader" class="preloader">
        </div> -->
    </div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent'
import PreloaderComponent from '../general/PreloaderComponent'
import ProductSearchComponent from './ProductSearchComponent'



export default {
    data(){
        return {
            title:'Lista de Produtos',
            products:{
                current_page:1,
                last_page:1,   
            },
            //quantidade de items que quer exibir
            offset:4,
            preloader:false,
            confirmDelete:false,
            idProductDelete:0,
            filter:''
        }
    },
    created(){
        this.getProducts()
    },    
    methods:{
        getProducts(){
            this.preloader = true


            this.$http.get(`http://webservice-laravel-5-5.test/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`)
                //then é para pegar o retorno
                .then(response => {
                    console.log(response.body)
                    this.products = response.body
                }, error =>{
                    console.log(error)
                })
                .finally(() => this.preloader = false)
        },
        confirmaDeleteProduct(id){
            this.confirmDelete = true

            this.idProductDelete = id

        },                
        deleteProduct(){
            this.preloader = true
            
            this.$http.delete(`http://webservice-laravel-5-5.test/api/v1/products/${this.idProductDelete}`)
            .then(response => {
                    //se der certo  trazer novamente a lista de produtos
                    this.getProducts()

                }, error =>{
                    console.log(error)
                })
            .finally(() => this.preloader = false)

            this.confirmDelete = false
        },
        searchProduct(filter){
            this.filter = filter

            this.getProducts()
        }
    },
    components:{
        PaginationComponent, 
        PreloaderComponent ,
        ProductSearchComponent      
    }
}
</script>

<style scoped>
.preloader{max-width:60px;}

.btn-cre{margin:10px 0;}

</style>