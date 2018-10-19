<template>
    <div>
        <h2 v-text="question"></h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Quiz',
            question: 'Gerando pergunta...'
        }
    }
}
</script>

<style scoped>

</style>
