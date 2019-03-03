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
    inputTodo() {
      let value = this.newTodoItem;
      this.$emit("addTodo", value);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>
<style>
</style>
