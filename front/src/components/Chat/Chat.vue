<template>
    <ul class="chatt-list">
        <li 
        v-for="(channel, index) in channels" 
        :key="index"        
        >
            <router-link
            :to="{name: 'channel', params: {cname: channel}}"
            >
            {{channel}}
            </router-link>
        </li>             
        <ul class="msg-list">
            <li
            v-for="(message, index) in messages" :key="index"
            >{{message}}</li>
        </ul>
        <br>
        <div>{{$route.params.cname}}</div>
        <input type="text" v-model="message">   
        <button v-on:click="send_message();">send</button>
    </ul>
</template>

<script>
export default {
    name: 'chat',
    data(){
        return{
            channels: ["general", "random" ],
            message: "",
            messages: []
        }
    },
    methods: {
        send_message(){
            this.messages.push(this.message);
            this.message="";
        }
    }    
}
</script>
<style>
    .chatt-list{
        list-style-type: none; 
    }
    .msg-list{
        list-style-type: none; 
    }    
</style>
