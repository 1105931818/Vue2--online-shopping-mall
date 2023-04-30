//shopCart模块仓库
import {reqCartList , deleteCart , reqCheckCart} from '@/api'


const actions = {
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit("GETCARTLIST" , result.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },

    async deleteCartItem({commit} , skuId){
        let result = await deleteCart(skuId)
        if(result.code == 200){
            return "删除成功"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },

    async getCheckCart({commit} , {skuId , isChecked}){
        let result = await reqCheckCart(skuId , isChecked)
        if(result.code == 200){
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },

    //删除全部勾选商品
    deleteAllCheckedCart({dispatch , getters}){

        let PromiseAll = []

        getters.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartItem' , item.skuId) : ''
            PromiseAll.push(promise) 
        })

        return Promise.all(PromiseAll)
    },

    //全选商品
    getAllCheck({dispatch , getters} , flag){

        let PromiseAll = []

        getters.cartInfoList.forEach(item => {
            if(item.isChecked != flag){
                let promise = dispatch("getCheckCart" , {skuId:item.skuId , isChecked:flag})
                PromiseAll.push(promise)
            }
        })

        return Promise.all(PromiseAll)
    }
}

const mutations = {

    GETCARTLIST(state , cartList){
        state.cartList = cartList
    }

}

const state = {
    cartList:[]
}

const getters = {
    cartInfoList(state){
        return state.cartList[0] ? state.cartList[0].cartInfoList : []
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}