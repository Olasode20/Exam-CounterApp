<template>
  <div class="hello">
    <h2>The <span class="title">Todo</span> App</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-items">
        <span :class="{'line-through' : todo.isCompleted}">{{todo.name}}</span>
        <button class="delete-todo" @click="onDelete(todo.id)">Delete</button>
        <button class="complete-todo" @click="onComplete(todo)">{{todo.isCompleted ? "Undo" : "Completed"}}</button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="todo">
      <button class="add-todo" @click="addTodo()" :disabled="todo === ''">Add Todo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      todo: "",
      todos: [
        {
          id: 1,
          name: "Buy Bread",
          isCompletd: false
        }
      ]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        name: this.todo,
        isCompleted: false
      }),
        (this.todo = "");
    },
    onComplete(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    onDelete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 500px;
  border: 5px solid black;
  padding: 20px;
  margin: 0 auto;
  background-color: rgb(214, 213, 213);
  box-sizing: border-box;
}
h2 {
  margin: 20px, 20px;
}
li {
  font-weight: bold;
}
.title {
  color: red;
  font-size: 35px;
}
input {
  border: 2px solid black;
  height: 25px;
  border-radius: 3px;
}
button {
  margin: 20px;
  width: 100px;
  height: 30px;
  color: red;
  font-weight: bold;
  border-radius: 3px;
}
.line-through {
  text-decoration: line-through;
}
</style>
