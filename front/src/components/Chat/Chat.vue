<template>
  <ul class="chatt-list">
    <li v-for="(channel, index) in channels" :key="index">
      <router-link :to="{name: 'channel', params: {cname: channel}}">{{channel}}</router-link>
    </li>
    <ul class="msg-list">
      <li v-for="(message, index) in messages" :key="index">{{message}}</li>
    </ul>
    <br>
    <div>{{$route.params.cname}}</div>
    <input type="text" v-model="message">
    <button v-on:click="send_message();">send</button>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // vuex에서 헬퍼함수로 사용. getters와 actions에 등록한 메서드를 매핑해준다.
import { SET_MESSAGES, GET_CHANNELS } from "../../store/mutation-types";

export default {
  name: "chat",
  mounted() {
    this.GET_CHANNELS();
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    send_message() {
      // console.log(this.message);
      this.SET_MESSAGES(this.message);
      this.message = "";
      //   this.messages.push(this.message);
      //   this.message = "";
    },
    ...mapActions([SET_MESSAGES, GET_CHANNELS])
  },
  computed: {
    ...mapGetters(["messages", "channels"])
  }
};
</script>
<style>
.chatt-list {
  list-style-type: none;
}
.msg-list {
  list-style-type: none;
}
</style>
