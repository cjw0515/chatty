<template>
  <div>
    <Header></Header>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import Footer from "./Footer.vue";

export default {
  data: function() {
    return {
      todoItems: ["밥먹기", "운동하기", "공부하기"]
    };
  },
  methods: {
    addTodo(todoItem) {
      this.todoItems.push(todoItem);
    },
    removeTodo(index) {
      this.todoItems.splice(index, 1);
    }
  },
  components: {
    Header,
    TodoInput,
    TodoList,
    Footer
  }
};
</script>

<style>
</style>
