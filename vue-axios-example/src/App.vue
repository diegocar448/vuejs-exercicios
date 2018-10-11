<template>
  <div id="app">
    <search-cep-component></search-cep-component>

  </div>
</template>

<script>
import SearchCepComponent from './components/SearchCepComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    SearchCepComponent
  }
}
</script>

<style>

</style>
