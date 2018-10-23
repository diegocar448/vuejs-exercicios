<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="updateProduct">
            <div class="form-group" :class="{'has-warning' : errorsValidation.name}">
                <input type="text" class="form-control" placeholder="Nome:" v-model="product.name">

                <div v-if="errorsValidation.name" class="">
                    <p v-for="(error, index) in errorsValidation.name" :key="index" v-text="error"></p>
                </div>
            </div>
            <div class="form-group" :class="{'has-warning' : errorsValidation.description}">
                <input type="text" class="form-control" placeholder="Descrição:" v-model="product.description">

                <div v-if="errorsValidation.description" class="">
                    <p v-for="(error, index) in errorsValidation.description" :key="index" v-text="error"></p>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">Editar</button>
            </div>
        </form>

        <preloader-component :preloader="preloader">

        </preloader-component>
    </div>
</template>

<script>
import PreloaderComponent from '../general/PreloaderComponent'

export default {
    //usamos o prop para garantir que o ID sempre será enviado
    props:{
        id:{
            required:true,
            default:'',            
        }
    },
    data(){
        return{
            title: 'Editar Produto',
            product:{
                name: '',
                description:'',
            },
            //trabalhando com erros
            errorsValidation: '',
            preloader: false,
        }
    },
    //agora vamos procurar e pegar os dados da api pelo id e para preencher os campos
    created(){
        this.getProduct()
    },
    methods:{
        getProduct(){
            //Pegar a propriedade preloader mostrar preloader ao usuario enquanto esta carregando
            this.preloader = true

            this.$http.get(`http://webservice-laravel-5-5.test/api/v1/products/${this.id}`)
                .then(response => {
                    console.log(response)
                    
                    this.product = response.body
                    
                }, error => {      
                    if(error.status === 404){
                        alert('Produto não encontrado')

                        //caso o usuario altere o id na url por um id errado ele vai redirecionar para pagina de listar produtos
                        this.$router.push('/product')
                    }                    
                    console.log(error)
                })
                .finally(() => this.preloader = false )
        },
        updateProduct(){
            //Pegar a propriedade preloader
            this.preloader = true

            //usamos o verbo http put para editar
            this.$http.put(`http://webservice-laravel-5-5.test/api/v1/products/${this.id}`, this.product)
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
                .finally(() => this.preloader = false )

                
        }
    },

    components:{
        PreloaderComponent
    }

}
</script>

<style scoped>
.has-warning{color: rgb(190, 66, 28);}
.has-warning input{ border:1px solid rgb(190,66,28) }

</style>
