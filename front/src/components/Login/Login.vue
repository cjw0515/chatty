<template>
  <div>
    <!-- <div v-on:click="popupLogin();">login</div>
    <div v-on:click="logOut();">logOut</div>-->
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
    <router-link :to="{name: 'HelloWorld', params: ''}">홈으로</router-link>
  </div>
</template>  
  
<script>
import firebase from "firebase/app";
import { firebaseApp } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-container", uiconfig);

console.log(firebase.auth().currentUser);

export default {};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />
