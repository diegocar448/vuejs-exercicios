<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP:" v-model="cep">
            <button type="submit">Busca</button>
        </form>

        <div v-if="address.cep">
            <p>Cep: {{ address.cep }}</p>
            <p>logradouro: {{ address.logradouro }}</p>
            <p>complemento: {{ address.complemento }}</p>
            <p>bairro: {{ address.bairro }}</p>
            <p>localidade: {{ address.localidade }}</p>
        </div>
    </div>
</template>

<script>
//Para usar o axios nesse componente 
//precisamos importa
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
            //alert(this.cep)
            axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
                .then(response => {
                    console.log(response.data)

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

<style>

</style>
