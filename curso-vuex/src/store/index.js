//Todas as configurações de Vuex será configurada aqui

//Vamos importar o Vuex aqui
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        tasks: [
            {name:'Lavar Carro', completed:false},
            {name:'Lavar Casa', completed:false},
            {name:'Lavar Banheiro', completed:false},
            {name:'Lavar Roupa', completed:false},
        ],
    },
    mutations:{
        //ele recebe o estado
        ADD_TASK (state, task){
            state.tasks.push(task)
        },
        TOOGLE_TASK(state, task){
            //se false passa para true e se true passa para false
            task.completed = !task.completed
        }
    }
})


