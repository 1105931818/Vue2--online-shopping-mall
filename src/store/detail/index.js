import { reqGetDetail, reqGoodsInfo,reqGetSkulist, reqToCart } from "@/api";

//封装游客身份模块uuid ----》生成一个随机字符串
import { getUUID } from "@/utils/uuid_token"


const actions = {

    async getGoodsInfo({commit} , skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit("GETGOODSINFO" , result.data)
        }
    },

    async getDetailInfo({commit}){
        let result = await reqGetDetail()
        if(result.code == 200){
            commit("GETDETAILINFO" , result.data)
        }
    },

    async getSkulist({commit}){
        let result = await reqGetSkulist()
        if(result.code == 200){
            commit("GETSKULIST" , result.data)
        }
    },

    async addShopCart({commit} , {skuId , skuNum}){
        let result = await reqToCart(skuId , skuNum)
        //当前这个函数如果执行返回Promise
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile')) 
        }
        /* return Promise.reject(new Error('faile'))   返回失败*/
    }

}

const mutations = {

    GETGOODSINFO(state , goodsInfo){
        state.goodsInfo = goodsInfo
    },

    GETDETAILINFO(state , skuImageList){
        state.skuImageList = skuImageList
    },

    GETSKULIST(state , skuSaleAttrValueList){
        state.skuSaleAttrValueList = skuSaleAttrValueList
    },


}

const state = {

    goodsInfo:{},
    skuImageList:[],
    skuSaleAttrValueList:{},
    uuid_token:getUUID()

}

const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    skuSaleAttrValueList(state){
        return state.goodsInfo.skuInfo ? state.goodsInfo.skuInfo.skuSaleAttrValueList : []
    }
}


export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}