<template>
  <div>
    <div class="el-container">
      <div class="el-aside">
        <ul>
          <li>채널1</li>
          <li>채널1</li>
        </ul>
      </div>
    </div>
    <div class="el-container">
      <div class="el-header">헤더</div>
      <div class="el-main"></div>
      <div class="el-footer">
        <input type="text" class="el-input">
      </div>
    </div>
  </div>
  <!-- <ul class="chatt-list">
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
  </ul>-->
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
ul {
  list-style-type: none;
  padding: 0;
}

.el-header {
  border-bottom: 1px solid black;
}

.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #4a3a4a;
  text-align: center;
  width: 100px !important;
}

.el-aside a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

.el-container {
  height: 100vh;
}

.el-input {
  width: 50%;
}
</style>
