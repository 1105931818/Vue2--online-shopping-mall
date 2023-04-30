//Search模块的小仓库
import {reqSearchSelector} from "@/api"



//仓库存储数据的地方
const state = {
    searchList:{}
}

//修改start的唯一方式
const mutations = {
    SEARCHSELECTOR(state , searchList){
        state.searchList = searchList
    }
}

//处理action，可以书写业务逻辑，也可以处理异步
const actions = {
    async searchSelector({commit} , params={}){
        let result = await reqSearchSelector(params)
        if(result.code == 200){
            commit("SEARCHSELECTOR" , result.data)
        }
    }
}

//理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    //state为当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}