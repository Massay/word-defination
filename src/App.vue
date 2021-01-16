<template>
  <div id="app" class="container">
    <b-nav>
      <b-nav-item><router-link exact active-class="active" to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link exact active-class="active" to="/teacher">Teacher</router-link></b-nav-item>
      <b-nav-item><router-link exact active-class="active" to="/student">Student</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  background: #715DD6;
  padding: 15px;
  color:white
}
</style>
