<template>
    <div class="alert alert-danger">
        <h1>{{ title }}</h1>
        <hr>
        <p>Erro na resposta!</p>

        <button class="btn btn-danger" @click="nextQuestion">Próxima Pergunta</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'Errada!'
        }
    },
    methods:{
        nextQuestion(){
            this.$emit('changeMode')
        }
    }
}
</script>

<style scoped>
.error{border: 2px solid red; padding:10px;}
</style>
