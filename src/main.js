import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter  from 'vue-router'
import  c from'./components/change.vue'
Vue.use(Vuex)
Vue.use(VueRouter)
// 创建了一个管理状态得容器
const store = new Vuex.Store({
  state:{
    msg:1
  },  // 转变，改变;
  // 这个里面提供得方法  代码有要求:
  // 一定要是同步代码!
  mutations:{
    increment(state,name){
      console.log(name+"开始改变数据")
        state.msg++
        console.log(222222)
      
    }
  },
  actions:{
    increment(context,name){
      console.log('this is action  -----  name:', name)
      //这里面写异步代码
      context.commit('increment',name)
    }
  },
  getters: {
      getMsg(state){
        return state.msg+"我的数据"
      }
  }
})

const router = new VueRouter({
  routes:[
    {path:"/",components:
      {
        a:c,
        b:()=>import('./components/result.vue'),
      }
    }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
