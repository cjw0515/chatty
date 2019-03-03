<template>
  <div>
    <ul>
      <li v-for="(todoItem, idx) in propsdata" :key="idx">
        {{todoItem}}
        <button v-on:click="deleteItem(idx)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    deleteItem: function(index) {
      this.$emit("removeTodo", index);
    }
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style>
</style>
