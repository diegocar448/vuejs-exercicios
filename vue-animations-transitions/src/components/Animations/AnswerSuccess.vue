<template>
    <div class="alert alert-success">
        <h1>{{ title }}</h1>
        <hr>
        <p>Sucesso na resposta!</p>

        <button class="btn btn-success" @click="nextQuestion">Próxima Pergunta</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'Sucesso!'
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
.success{border: 2px solid green; padding:10px;}
</style>
