<template>
<div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <TodoApp msg="Todo App"/>
  </div>
</template>

<script>
import TodoApp from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    TodoApp
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c5b99;
  margin-top: 60px;
}
</style>
