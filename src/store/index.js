import Vue from "vue";
import Vuex from "vuex"
import homeOptions from "./home"
import searchOptions from "./search"
import detailOptions from "./detail";
import shopOptions from "./shopcart"
import loginOptions from "./login"
import tradeOptions from "./trade"


Vue.use(Vuex)



//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules:{
        homeOptions,
        searchOptions,
        detailOptions,
        shopOptions,
        loginOptions,
        tradeOptions
    }
})