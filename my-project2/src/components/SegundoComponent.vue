<template>
    <div>
        <p>Segundo Teste</p>
        <span>{{msg}}</span>
        <test-component></test-component>
    </div>
</template>

<script>
import TestComponent from './TestComponent'

export default{
    data(){
        return{
            msg:"Segundo Component"
        }
    },
    components:{
        TestComponent
    }
}
</script>

<style scoped>
p{color:green;}
</style>

