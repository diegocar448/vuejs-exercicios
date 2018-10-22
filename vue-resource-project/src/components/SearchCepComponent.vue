<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Informe o CEP:" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>

        <div v-if="error != ''">
            {{ error }}
        </div>

        <div v-if="preloader">
            <img src="../assets/preloader.gif" alt="Carregando">
            Carregando...
        </div>


        <div v-show="address.bairro != '' ">            
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
            },
            preloader:false,
            error:''

        }
    },
    methods:{
        onSubmit(){
            //alert(this.cep)
            this.reset()



            this.preloader = true,

            //aceita o this sem erros no callback pq o this faz o this.address.. fazer parte da própria instancia
            this.$http.get(`https://api.postmon.com.br/v1/cep/${this.cep}`)
                    .then(response => {
                        this.address = response.body   
                        
                        this.preloader = false
                    }, error => {
                        console.log(error)

                        this.error = 'CEP Errado!'
                        
                    })
                    .finally(() => {
                        this.preloader = false
                    })
        },

        reset(){
            this.error = ''
            this.address = {bairro:''}
        }
    }
}
</script>

<style scoped>

</style>
