let actions = {
    //usaria ajax para se comunicar com a api extena
    addTask(context, task){
        //...ajax
        //usamos o commit pq para chamar o mutation precisamos colcoar o commit
        context.commit('ADD_TASK', task)           

    }
}

export default actions