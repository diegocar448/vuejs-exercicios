<template>
    <div>
        <h1 v-text="title"></h1>
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP:" v-model="cep">
            <button type="submit">Buscar</button>
        </form>

        <div v-if="address.cep">
            <p>CEP: {{ address.cep }}</p>
            <p>Logradouro: {{ address.logradouro }}</p>
            <p>Complemento: {{ address.complemento }}</p>
            <p>Bairro: {{ address.bairro }}</p>
            <p>Localidade: {{ address.localidade }}</p>
        </div>
    </div>
</template>

<script>
//importando a biblioteca axios para requisições ajax
import axios from 'axios'


export default {
    data(){
        return{
            title:'Busca CEP',
            cep:'',
            address: {}
        }
    },
    methods:{
        onSubmit(){
            //fazer requisição ajax passando o verbo http
            axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
                .then(response => {
                    console.log(response)

                    this.address = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => console.log('Finally'))
        }
    }
}
</script>

<style scoped>

</style>
