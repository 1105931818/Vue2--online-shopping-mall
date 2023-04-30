import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

import "element-ui/lib/theme-chalk/index.css"

import element from './element-ui'

import VueLazyload from "vue-lazyload"

//注册全局组件
import TypeNav from "@/components/TypeNav"
import CarouseL from "@/components/Carousel"
import PaginaTion from "@/components/Pagination"

//引入mockServer.js-----mock数据
import "@/mock/mockServer"

import "swiper/css/swiper.css"
import "swiper/js/swiper"

//引入统一接口文件中所有的请求函数
import * as API from "@/api"

import lazy from "@/assets/logo.png"


//引入自定义插件
/* import myPlugins from '@/plugins/myPlugins' */

/* Vue.use(myPlugins) */


//引入表单校验插件
import '@/plugins/validate'


Vue.use(element)

Vue.use(VueLazyload , {
  loading:lazy
})

Vue.component("TypeNav" , TypeNav)
Vue.component("CarouseL" , CarouseL)
Vue.component("PaginaTion" , PaginaTion)

Vue.config.productionTip = false


Vue.use(VueRouter)





new Vue({
  el:"#root",
  template:`<App></App>`,
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  //注册路由
  router,
  //注册仓库：组件实例身上会多一个属性$store
  store,

})
