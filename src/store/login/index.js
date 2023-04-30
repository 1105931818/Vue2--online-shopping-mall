import { reqUsersendCode , reqUserRegister ,reqUserLogin ,reqUserInfo ,reqUserLogout } from "@/api";
import { setToken , getToken , removeToken } from "@/utils/token";

const actions = {

    //发送验证码，正常的是后端发送到用户手机上
    async getUserCode({commit} , phone){
        let result = await reqUsersendCode(phone)
        if(result.code == 200){
            commit("GETCODE" , result.data)
            return "发送成功"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },

    //用户注册
    async getUserRegister({commit} , userdata){
        let result  = await reqUserRegister(userdata)
        if(result.code == 200){
            return "注册成功"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },

    //用户登录【token】
    async getUserLogin({commit} , userdata){
        let result = await reqUserLogin(userdata)
        if(result.code == 200){
            //服务器下发token，用户唯一标识符。通过token找服务器要用户信息进行展示
            commit("GETTOKEN" , result.data.token)

            //持久化存储token
            /* sessionStorage.setItem("TOKEN" , result.data.token) */
            setToken(result.data.token)
            return "登录成功"
        }else{
            return Promise.reject(new Error("账号密码错误"))
        }
    },

    //token验证
    async getUserToken({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit("USERLIST" , result.data)
            return "登录成功"
        }else{
            return Promise.reject(new Error("未登录"))
        }
    },

    //退出登录
    async getUserLogout({commit}){
        let result = await reqUserLogout()
        if(result.code == 200){
            commit("CLEAR")
            return "退出成功"
        }else{
            return Promise.reject(new Error("退出失败"))
        }
    }


}

const mutations = {

    GETCODE(state , code){
        state.code = code
    },

    GETTOKEN(state , token){
        state.token = token
    },

    USERLIST(state , userlist){
        state.userlist = userlist
    },

    CLEAR(state){
        state.token = ""
        state.userlist = {}
        removeToken()
    }

}

const state = {


    code:"",

    token:getToken(),

    userlist:{}


}

const getters = {

}

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}