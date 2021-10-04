<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <School></School>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  data() {
    return {
      num:10,
      name:'香蕉'
    }
  },
  components: {
    HelloWorld,
    School
  },
  methods: {
    test(){
      let a = 3
      let b = 4
      let d = 5
      let c = 3
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
