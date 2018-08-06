<template>
  <div id="app" class="comp">    
    <HelloWorld msg="Vue.js"/>

    <tasks-component></tasks-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TasksComponent from './components/TasksComponent'

export default {
  name: 'app',
  components: {
    HelloWorld, 
    TasksComponent
  }
}
</script>

<style>
.comp{
  border:1px solid blue; margin:5px;padding:5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
