import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y:0}),
  routes
})

Vue.use(ElementUI, {locale})
Vue.config.productionTip = false
//뷰 인스턴스 생성 객체에 router속성이 있다. 뷰라우터를 사용하려면 라우터 객체를 넘겨줘야한다.

new Vue({
  store,
  router,  
  render: h => h(App),
}).$mount('#app')


