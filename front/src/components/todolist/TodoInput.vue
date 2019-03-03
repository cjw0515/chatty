<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="inputTodo">삽입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    inputTodo() {}
  }
};
</script>
<style>
</style>
