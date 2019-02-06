import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'

Vue.use(Router)

/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */

export default new Router({
    routes:[
        {
            path:'/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/channel',
            name: 'channel',
            component: Chat
        }
    ]
})