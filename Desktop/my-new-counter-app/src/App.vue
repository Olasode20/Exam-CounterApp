<template>
<div>
  <div className="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/CounterPage">MyCounter</router-link>
</div>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App"
};
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
.nav {
  margin: 0;
  padding: 0;
}
</style>
