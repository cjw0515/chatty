import HelloWorld from '../components/HelloWorld.vue'
import Chat from '../components/Chat/Chat.vue'

/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */

export default [
    {
        path:'/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path:'/channel/:cname',
        name: 'channel',
        component: Chat
    }
]