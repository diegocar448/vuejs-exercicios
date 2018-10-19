<template>
    <div>
        <h2 v-text="title"></h2>

        <app-question></app-question>
    </div>
</template>

<script>
import Question from './Question'


export default {
    data(){
        return{
            title: 'Quiz'
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
