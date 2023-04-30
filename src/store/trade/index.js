import { reqUserAdderss , reqGetUser , reqTradeOrder } from "@/api"

const actions = {
    async getUserAdderss({commit}){
        let result = await reqUserAdderss()
        if(result.code == 200){
            return "用户地址请求成功"
        }else{
            return Promise.reject(new Error("请求失败"))
        }
    },

    async getUserItem({commit}){
        let result = await reqGetUser()
        if(result.code == 200){
            commit("GETUSERITEM" , result.data)
            return "MOCK数据成功"
        }else{
            return Promise.reject(new Error("MOCK数据失败"))
        }
    },

    async getTradeList({commit}){
        let result = await reqTradeOrder()
        if(result.code == 200){
            commit("GETTRADELIST" , result.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}

const mutations = {

    GETUSERITEM(state , useritem){
        state.useritem = useritem
    },

    GETTRADELIST(state , tradelist){
        state.tradelist = tradelist
    }

}

const state = {

    useritem:[],

    tradelist:{}

}

const getters = {

    detailArrayList(state){
        return state.tradelist.detailArrayList ? state.tradelist.detailArrayList : []
    }

}

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}