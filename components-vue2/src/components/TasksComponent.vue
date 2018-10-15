<template>
    <div>
        <h2>{{title}}</h2>

        <input type="text" v-model="task">
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
            task: ''
        }
    },

    methods:{
        callParent(){
            alert('Chama Pai')
            //emit com parametro (pode ser 1 ou mais parametros)
            this.$emit('calledParent', this.task)

            this.task = ''
        }
    }
}
</script>

<style scoped>

</style>
