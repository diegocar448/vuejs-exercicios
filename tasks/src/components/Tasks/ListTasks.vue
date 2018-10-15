<template>
    <div>
        <h2 class="text-center">{{ title }}</h2>

        <form @submit.prevent="save" class="form form-inline">
            <input class="form-control" type="text" placeholder="Nome Tarefa" v-model="task.name">
            <button class="btn btn-primary" type="submit">Enviar</button>
        </form>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a class="btn btn-info" href="">Editar</a>
                        <a class="btn btn-danger"  href="">Deletar</a>
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
            tasks:[
                /* {id:12, name:'nuke'},
                {id:14, name:'hope'},
                {id:16, name:'high'},
                {id:18, name:'take'}, */
            ],
            task:{
                id:'',
                name:''
            }
        }
    },
    methods:{
        save(){
            //gerar id de task
            let idTask = this.tasks.length + 1

            //agora vamos adicionar ao nosso task e aparece em nossa listagem
            this.task.id = idTask

            //alert(this.task.name)
            //adicionar o novo registro a tabela
            this.tasks.push(this.task)
            //limpar o campo input do form
            this.task = {
                id:'',
                name:''
            }
            
        }
    }
}
</script>

<style scoped>
form{
    margin:20px 0px
}
</style>
