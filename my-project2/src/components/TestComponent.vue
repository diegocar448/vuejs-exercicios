<template>
    <div>
        <!-- quando tiver mais de 1 item na tag principal precisa criar um segundo para agrupa-los -->
        <p>Teste 2</p>
        <span>{{msg}}</span>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:'Teste de Vue JS 2'
        }
    }

}
</script>

<style scoped>

p{color:red;}
</style>

