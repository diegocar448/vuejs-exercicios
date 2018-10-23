<template>
    <div>
        <h1>{{ title }}</h1>

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
                        <button class="btn btn-sm btn-success">Editar</button>
                        <button class="btn btn-sm btn-danger">Apagar</button>
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

        <pagination-component 
            :pagination="products"
            :offset="offset"
            @paginate="getProducts"
            >

        </pagination-component>

        <div v-if="preloader">
            <img src="../../assets/preloader.gif" alt="Preloader" class="preloader">
        </div>
    </div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent'

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
            preloader:false
        }
    },
    created(){
        this.getProducts()
    },    
    methods:{
        getProducts(){
            this.preloader = true


            this.$http.get(`http://webservice-laravel-5-5.test/api/v1/products?page=${this.products.current_page}`)
                //then é para pegar o retorno
                .then(response => {
                    console.log(response.body)
                    this.products = response.body
                }, error =>{
                    console.log(error)
                })
                .finally(() => this.preloader = false)
        },
        //aqui ele vai passar qual pagina ele vai carregar passando como parametro na função
        pagination(pageNumber){
            this.products.current_page = pageNumber

            this.getProducts()
        }
    },
    components:{
        PaginationComponent
    }
}
</script>

<style scoped>
.preloader{max-width:60px;}

</style>