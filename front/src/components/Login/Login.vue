<template>
  <div>
    <!-- <div v-on:click="popupLogin();">login</div>
    <div v-on:click="logOut();">logOut</div>-->
    <div id="firebaseui-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>  
  
<script>
import firebase from "firebase/app";
import { firebaseApp } from "../../config";
import * as firebaseui from "firebaseui";
import uiconfig from "./uiConfig";

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-container", uiconfig);

export default {};
</script>
<style src="../../../node_modules/firebaseui/dist/firebaseui.css" />
