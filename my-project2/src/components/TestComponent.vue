<template>
    <div class="comp">
        <!-- quando tiver mais de 1 item na tag principal precisa criar um segundo para agrupa-los -->
        <p>{{title}}</p>
        <span>{{msg}}</span>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:'Teste de Vue JS 2',
            title: 'Component Title'
        }
    }

}
</script>

<style scoped>

    p{color:red;}
    .comp{border:1px solid green; margin:5px; padding:5px;}
</style>

