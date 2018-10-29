const getters = {
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

export default getters