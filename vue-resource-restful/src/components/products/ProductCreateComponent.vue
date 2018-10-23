<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="createProduct">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome:" v-model="product.name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Descrição:" v-model="product.description">
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">Cadastrar Agora</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Cadastrar Novo Produtos',
            product:{
                name: '',
                description:'',
            }
        }
    },
    methods:{
        createProduct(){
            console.log(this.product)
        }
    }

}
</script>

<style scoped>

</style>
