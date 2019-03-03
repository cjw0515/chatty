<template>
  <div>
    <ul>
      <li v-for="(todoItem, idx) in propsdata" :key="idx">
        {{todoItem}}
        <button v-on:click="deleteItem">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    deleteItem: function() {
      alert("삭제버튼 클릭");
    }
  }
};
</script>

<style>
</style>
