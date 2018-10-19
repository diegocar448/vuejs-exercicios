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


export default {
    data(){
        return{
            title: 'Quiz',
            //Criar uma propriedade para trazer o appcast
            mode: 'app-question'
        }
    },    
    methods:{
        changeMode(){
            alert('Uhuuuuu')
        }
    },
    components:{
        //colocamos um "alias" para evitar conflitos com nomes iguais
       'app-question' : Question
    }
}
</script>

<style scoped>

</style>
