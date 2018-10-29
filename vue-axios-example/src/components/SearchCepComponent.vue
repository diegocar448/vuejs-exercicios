<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP:" v-model="cep">
            <button type="submit">Busca</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'Busca CEP',
            cep:''
        }
    },
    methods:{
        onSubmit(){
            alert(this.cep)
        }
    }
    
}
</script>

<style>

</style>
