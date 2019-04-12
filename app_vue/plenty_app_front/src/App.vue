<template>
  <div id="app">
    <div class="row">
      <div class="column left">
        <Sidebar />
      </div>
      <div class="column right">
        <Navbar />
        <img src="./assets/logo.png">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
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
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
.column {
  float: left;
  padding: 10px;
}
.left {
  width: 25%;
}
.right {
  width: 75%;
}
</style>
