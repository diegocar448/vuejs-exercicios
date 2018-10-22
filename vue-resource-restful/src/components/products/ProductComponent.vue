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
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'Lista de Produtos',
            products:{}
        }
    },
    created(){
        this.getProducts()
    },    
    methods:{
        getProducts(){
            this.$http.get('http://webservice-laravel-5-5.test/api/v1/products')
                //then é para pegar o retorno
                .then(response => {
                    this.products = response.body
                }, error =>{
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>
