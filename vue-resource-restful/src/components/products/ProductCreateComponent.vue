<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="createProduct">
            <div class="form-group" :class="{'has-warning' : errorsValidation.name}">
                <input type="text" class="form-control" placeholder="Nome:" v-model="product.name">

                <div v-if="errorsValidation.name" class="">
                    <p v-for="(error, index) in errorsValidation.name" :key="index" v-text="error"></p>
                </div>
            </div>
            <div class="form-group" :class="{'has-warning' : errorsValidation.description}">
                <input type="text" class="form-control" placeholder="Descrição:" v-model="product.description">

                <div v-if="errorsValidation.name" class="">
                    <p v-for="(error, index) in errorsValidation.description" :key="index" v-text="error"></p>
                </div>
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
            },
            //trabalhando com erros
            errorsValidation: ''
        }
    },
    methods:{
        createProduct(){
            this.$http.post('http://webservice-laravel-5-5.test/api/v1/products', this.product)
                .then(response => {
                    //console.log(response)
                    this.$router.push('/product')
                    
                }, error => {
                    if(error.status === 422)
                    {
                        this.errorsValidation = error.body.errors
                    }
                    console.log(error)
                })
                .finally(() => console.log('Finalizou !!') )

                
        }
    }

}
</script>

<style scoped>
.has-warning{color: rgb(190, 66, 28);}
.has-warning input{ border:1px solid rgb(190,66,28) }

</style>
