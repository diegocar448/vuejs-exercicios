<template>
    <div class="card">
        <div class="card-header">
            <h2 v-text="question"></h2>
        </div>

        <div class="card-body">
            <form @submit.prevent="checkResult" class="form form-inline">
                <input type="text" placeholder="Resposta:" v-model="reply">
                <button type="submit" class="btn btn-primary">Responder</button>
            </form>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{            
            question: 'Gerando pergunta...',
            result:0,
            reply:''
        }
    },
    created(){
        this.generateQuestion()
    },
    methods:{
        generateQuestion(){
            let numberOne = this.generateRandomNumber(1, 100) 
            let numberTwo = this.generateRandomNumber(1, 100) 

            this.result = numberOne + numberTwo

            this.question =  `Qual é o resutado da soma entre ${numberOne} + ${numberTwo} ? `
        },
        //função para gerar um numero randomico entre o min e o max
        //round é para retornar numeros inteiros 
        //random gerará números aleatórios
        generateRandomNumber(min, max){
            return Math.round(Math.random() * (max - min) + min)
        },
        //aqui verifica se o resultado que o usario informou esta correto
        checkResult(){
            let mode = 'answer-error'
            if(this.reply == this.result)
                //o valor do modulo que quero passar                
                mode = 'answer-success'
                /* alert("Errou!!!") */
                //Aqui vamos enviar para o metodo principal em App.vue
                //depois em App.vue ele vai chamar um component ou outro components dependendo do resultado 
            this.$emit('changeMode', mode)             
        }
    }
}
</script>

<style scoped>
.default{border: 2px solid blue; padding:10px;}

</style>
