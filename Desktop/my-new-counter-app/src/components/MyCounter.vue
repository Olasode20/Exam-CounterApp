<template>
  <div class="hello">
    <h1>The <span class="counter">Counter</span> App</h1>
  <p>{{ count }}</p>
    <div class="buttons">
      <button @click="handleIncrement">Increment</button>
      <button @click="handleDecrement">Decrement</button>
      <button @click="handleReset">Reset</button>
      <div class="input">
    <input type="number" 
    v-model="count" placeholder="Enter Value" 
    @input = "handleInput"
    ref="inputField">
    </div>
    <button @click="handleChange" type="submit">Set Value</button> <br />
    </div>
    <!-- <span><b>{{message}}</b></span> -->
    </div>

</template>

<script>
import counter from "@/composables/counter";
import { ref } from "vue";

export default {
  setup() {
    const {
      count,
      handleIncrement,
      handleDecrement,
      handleReset,
      setValue
    } = counter();

    const inputValue = ref(count.value);

    // watch(count, newValue => {
    //   inputValue.value = newValue;
    // });

    return {
      count,
      handleIncrement,
      handleDecrement,
      handleReset,
      setValue,
      inputValue
    };
  }
};
</script>

<style>
.hello {
  background-color: rgb(236, 233, 233);
  width: 500px;
  padding: 20px;
  border: 3px solid black;
  margin: 0 auto;
}
.counter {
  color: red;
  font-weight: bold;
  font-size: 40px;
}
p {
  font-size: 40px;
  font-weight: bold;
}
input {
  width: 100px;
  height: 20px;
  text-align: center;
  border: 3px solid black;
}
button {
  margin: 20px;
  width: 120px;
  height: 50px;
  color: blue;
  border: 3px solid black;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
}
</style>
