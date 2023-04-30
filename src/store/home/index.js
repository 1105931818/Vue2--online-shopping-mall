//引入首页三级页面接口
import {reqCategoryList , reqGetBannerList, reqGetFloors} from "@/api"


//仓库存储数据的地方
const state = {

    categoryList:[],
    bannerList:[],
    floors:[]
}

//修改start的唯一方式
const mutations = {

    CATEGORYLIST(state , categoryList){
       state.categoryList = categoryList
    },
    GETBANNERLIST(state , bannerList){
        console.log("修改数据")
        state.bannerList = bannerList
    },
    GETFLOORS(state , floors){
        state.floors = floors
    }
}

//处理action，可以书写业务逻辑，也可以处理异步
const actions = {

    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST" , result.data)
        }
    },

    async getbannerList({commit}){
        console.log("向服务器发送请求")
        let result = await reqGetBannerList()
        if(result.code == 200){
            commit("GETBANNERLIST" , result.data)
        }
    },

    async getfloors({commit}){
        let result = await reqGetFloors()
        if(result.code == 200){
            commit("GETFLOORS" , result.data)
        }
    }

}

//理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}