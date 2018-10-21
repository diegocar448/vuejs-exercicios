<template>
    <div>
        <h2 v-text="title"></h2>

        <!-- <app-question @changeMode="changeMode"></app-question> -->
        <!-- pegamos o component pegando ele pelo alias da
            propriedade e colocando no :is -->
        <!-- <component            
            :is="mode"
            @changeMode="changeMode">
        </component> -->


        <!-- out-in : só quando ele sair vai aplicar a entrada || in-out somente quando ele finalizar a entrada ele roda a saída -->
        <transition name="effect" mode="out-in">
            <component            
                :is="mode"
                @changeMode="changeMode">
            </component>
        </transition>
    </div>
</template>

<script>
import Question from './Question'
import AnswerSuccess from './AnswerSuccess'
import AnswerError from './AnswerError'


export default {
    data(){
        return{
            title: 'Quiz',
            //Criar uma propriedade para trazer o appcast
            mode: 'app-question'
        }
    },    
    methods:{
        changeMode(mode){
            //se nao for informado retorna app-question default
            if(mode == undefined)
                this.mode = 'app-question'
            else
                this.mode = mode
        }
    },
    components:{
        //colocamos um "alias" para evitar conflitos com nomes iguais
       'app-question' : Question,
       AnswerSuccess,
       AnswerError,
    }
}
</script>

<style scoped>
    /* -active é enquanto acontece o efeito */
    .effect-leave-active{
        /* efeito durante a saida do componente*/
        animation: effect-out 2.5s;
    }
    .effect-enter-active{
        /* efeito durante a entrada do componente*/
        animation: effect-in 2.5s;
    }

    @keyframes effect-out {
        /*"from" é para onde estou indo e "on" é onde estou*/

        /*transform é para rotacionar */
        /* 0 deg == zero graus */
        from{
            transform: rotateY(0deg);
        }to{
            transform:rotateY(90deg);
        }
    }

    @keyframes effect-in{
        from{
            transform:rotateX(90deg);
        }to{
            transform:rotateX(0deg);
        }
    }

</style>
