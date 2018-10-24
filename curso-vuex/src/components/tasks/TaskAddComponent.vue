<template>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Adicionar Nova Tarefa" v-model="task.name">
        <button type="submit">Adicionar</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            task:{
                name:'',
                completed:false,
            }
        }
    },
    methods:{
        onSubmit(){
            //alert('Add task...')
            this.$store.commit('ADD_TASK', this.task)

            this.task = {
                name:'',
                completed:false,
            }
        }
    }
}
</script>

<style>

</style>
