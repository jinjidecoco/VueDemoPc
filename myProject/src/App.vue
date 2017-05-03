<template>
  <div id="app">
    <headA></headA>
    <router-view></router-view>
  </div>
</template>

<script>

import headA from './components/headA'

  export default {
    name: 'app',
    components: {
      headA
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:20px 240px;
}
</style>
