<template>
    <div>
        <h2 class="text-center">{{ title }}</h2>

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
                {id:12, name:'nuke'},
                {id:14, name:'hope'},
                {id:16, name:'high'},
                {id:18, name:'take'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
