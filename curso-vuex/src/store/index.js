//Todas as configurações de Vuex será configurada aqui

//Vamos importar o Vuex aqui
import Vue from 'vue'
import Vuex from 'vuex'
import Tasks from './modules/Tasks/index'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    //Aqui vamos adicionar os módulos
    modules:{
        Tasks
    }
})


