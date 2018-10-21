<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Informe o CEP:" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>


        <div v-show="address.bairro != '' ">
            {{address.logradouro}}
            <p><b>Bairro</b> {{ address.bairro }}</p>
            <p><b>Cidade</b> {{ address.cidade }}</p>
            <p><b>Rua</b> {{ address.logradouro }}</p>
            <p><b>CEP</b> {{ address.cep }}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'Busca Cep com Vue JS',
            cep:'',
            address:{
                bairro:''
            }

        }
    },
    methods:{
        onSubmit(){
            //alert(this.cep)
            this.$http.get(`https://api.postmon.com.br/v1/cep/${this.cep}`)
                    .then(response => {
                        this.address = response.body                      
                    }, error => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>
