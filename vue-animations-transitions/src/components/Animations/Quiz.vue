<template>
    <div>
        <h2 v-text="title"></h2>

        <!-- <app-question @changeMode="changeMode"></app-question> -->
        <!-- pegamos o component pegando ele pelo alias da
            propriedade e colocando no :is -->
        <component            
            :is="mode"
            @changeMode="changeMode">
        </component>
    </div>
</template>

<script>
import Question from './Question'
import AnswerSuccess from './AnswerSuccess'
import AnswerError from './AnswerError'


export default {
    data(){
        return{
            title: 'Quiz',
            //Criar uma propriedade para trazer o appcast
            mode: 'app-question'
        }
    },    
    methods:{
        changeMode(mode){
            //se nao for informado retorna app-question default
            if(mode == undefined)
                this.mode = 'app-question'
            else
                this.mode = mode
        }
    },
    components:{
        //colocamos um "alias" para evitar conflitos com nomes iguais
       'app-question' : Question,
       AnswerSuccess,
       AnswerError,
    }
}
</script>

<style scoped>

</style>
