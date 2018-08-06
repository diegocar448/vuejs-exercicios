<template>
    <div>
        <p>Teste Teste</p>
        <span>Teste {{ msg }}</span>

        <form-component></form-component>
    </div>
</template>

<script>
import FormComponent from './FormComponent'


export default {
    data() {
        return {
            msg: 'Curso de Vue JS'
        }
    },
    components:{
        FormComponent
    }

}
</script>

<style scoped>
p{color:red;}
</style>


