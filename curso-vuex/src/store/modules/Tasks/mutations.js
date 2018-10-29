let mutations = {
    //colocar sempre o nome maiusculo das mutations
    //ele recebe o estado
    ADD_TASK (state, task){
        state.tasks.push(task)
    },
    TOOGLE_TASK(state, task){
        //se false passa para true e se true passa para false
        task.completed = !task.completed
    }
}


export default mutations