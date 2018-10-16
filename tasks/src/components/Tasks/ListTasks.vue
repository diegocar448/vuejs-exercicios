<template>
    <div>
        <h2 class="text-center">{{ title }}</h2>

        <div class="row">
            <div class="col">
                <form class="form form-inline">
                    <input class="form-control" placeholder="Encontrar?" v-model="filter">            
                </form>
            </div>
            <div class="col">
                <form @submit.prevent="onSubmit" class="form form-inline">
                    <input class="form-control" type="text" placeholder="Nome Tarefa" v-model="task.name">
                    <button class="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th> 
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in filteredItems" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <!-- <a @click.prevent="edit(index)" class="btn btn-info" href="#">Editar</a> -->
                        <a @click.prevent="edit(task.id)" class="btn btn-info" href="#">Editar</a>
                        <a @click.prevent="deleteTask(task.id)" class="btn btn-danger"  href="#">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Lista de Tarefas',
            tasks:[],
            task:{
                id:'',
                name:''
            }, 
            //se for false é porque esta cadastrando senão esta editando
            updating: false,
            //pegar a posição do array para fazer a atualização da linha
            updatedIndex:'',
            filter:''
        }
    },
    methods:{
        onSubmit(){
            if(this.updating){
                this.update()
                return
            }
            this.save()
        },
        
        save(){
            //gerar id de task
            this.task.id = this.tasks.length + 1
            //agora vamos adicionar ao nosso task e aparece em nossa listagem
            //this.task.id = idTask
            //alert(this.task.name)
            //adicionar o novo registro a tabela
            this.tasks.push(this.task)
            
            this.clearForm()
            
        },
        edit(id){
            this.updatedIndex = this.findIndexItem(id)
            //console.log(this.tasks[index])
            //pegando as informações da linha antes da edição
            this.task = this.tasks[this.updatedIndex]
       
            //alterando o updating para true
            this.updating = true
        },
        update(){
            //aqui ele editar o campo Nome da linha (atualizar a posição do array selecionada)
            this.tasks[this.updatedIndex] = this.task
            //alterando o updating para true
            this.updating = false
            
            this.clearForm()
            
        },
        //limpar o campo input do form
        clearForm(){
            this.task = {
                id:'',
                name:''
            }
        },
        deleteTask(id){
            let index = this.findIndexItem(id)
            //alert(this.tasks[index])
            //Ele pega a posição do array que será deletada e remove apenas um item ,1
            this.tasks.splice(index, 1)
        },
        findIndexItem(id){
            for (let index = 0; index < this.tasks.length; index++) {                
                //percorrer os tasks
                if(this.tasks[index].id == id){
                    return index
                }
            }
        }
    },
    //propriedade computada
    computed:{
        filteredItems(){
            if(this.filter === ''){
                return this.tasks   
            }
            //this é a propria instacia do item que estamos trabalhando data(){}
            let vm = this
            /* return this.tasks.filter(task => {
                //função indexOf função nativa do JS para filtrar | 
                //se o retorno maior q -1 ele retorna caso contrario ele não retorno
                //return task.name.indexOf(vm.filter) > - 1
            }) */
            return this.tasks.filter(task => {
                //função indexOf função nativa do JS para filtrar | 
                //se o retorno maior q -1 ele retorna caso contrario ele não retorno
                return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > - 1
            })
            /* return this.tasks.filter(task => {
                //função includes para incluir na pesquisa                
                return task['name'].includes(vm.filter) 
            }) */
                
        }
    }
}
</script>

<style scoped>
form{
    margin:20px 0px
}
</style>
