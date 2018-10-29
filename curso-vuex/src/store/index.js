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
        //colocar sempre o nome maiusculo das mutations
        //ele recebe o estado
        ADD_TASK (state, task){
            state.tasks.push(task)
        },
        TOOGLE_TASK(state, task){
            //se false passa para true e se true passa para false
            task.completed = !task.completed
        }
    },
    actions:{
        //usaria ajax para se comunicar com a api extena
        addTask(context, task){
            //...ajax
            //usamos o commit pq para chamar o mutation precisamos colcoar o commit
            context.commit('ADD_TASK', task)           

        }
    },
    getters:{
        //sempre precisa passar o state em todos o getters criados
        sortedTasks(state){
            //criar uma variavel para ordernar nossas tarefas sem alterar o estado original(state)
            let sorted = state.tasks
            return sorted.sort((a,b) => {
                //se o a for menor então ele retorna para corrigir a ordenação
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                //mesma inversa se for o inverso da primeira situação
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1

                return 0
            }) 
        },
        tasksNotCompleted(state){
            let tasks = state.tasks

            //aqui será para pegar a tarefas que estão completas e as que não estão completas
            //o filter vai percorrer todas as tasks
            let tasksNotCompleted = tasks.filter((task) => {
                //vai retornar o proprio filtro apenas as não completas
                return !task.completed
            })
 
            return tasksNotCompleted
        }
    }

})


