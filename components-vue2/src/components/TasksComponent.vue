<template>
    <div>
        <h2>{{title}}</h2>

        <button @click="callParent">Chamar Component Pai</button>

        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>  
    </div>
</template>

<script>
export default {
    props:['items', 'title'], 

    data(){
        return{
            
        }
    },

    methods:{
        callParent(){
            alert('Chama Pai')

            this.$emit('calledParent')
        }
    }
}
</script>

<style scoped>

</style>
