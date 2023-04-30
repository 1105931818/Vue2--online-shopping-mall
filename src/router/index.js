import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";


//解决编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误
//1.先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace
//2.重写push||replace
//第一个参数：传递给原来的push||replace方法，往哪里跳转
//第二个参数：成功的回调
//第三个参数：失败的回调
VueRouter.prototype.push = function(location , resolve , reject){
    if(resolve && reject){
        //call || apply区别：
        //相同点，都可以调用函数一次，都可以篡改函数的this指向
        //不同点，call与apply传递参数，call传递参数用逗号隔开，apply传递数组
        originPush.call(this , location , resolve , reject)
    }else{
        originPush.call(this , location , () => {} , () => {})
    }
}
VueRouter.prototype.replace = function(location , resolve , reject){
    if(resolve && reject){
        originReplace.call(this , location , resolve , reject)
    }else{
        originReplace.call(this , location , () => {} , () => {})
    }
}




const router = new VueRouter({
    mode:"hash",
    routes,
    scrollBehavior(){
       
        return { y:0 }
        
            
    }
})


//全局前置守卫
router.beforeEach(async (to , from , next) => {

    //to:可以获取到要跳转到那个路由信息
    //from:可以获取到从哪个路由而来的信息
    //next() 放行函数

    let token = store.state.loginOptions.token
    let name = store.state.loginOptions.userlist.name

    //判断是否登录
    if(token){
        if(to.path == "/login" || to.path == "/register"){
            next("/home")
        }else{
            if(name){
                next()
            }else{
                await store.dispatch("loginOptions/getUserToken").then((a) => {
                    console.log(a)
                    next()
                }).catch(async (error) => {
                    //token失效
                    console.log(error.message)
                    await store.dispatch("loginOptions/getUserLogout").then(() => {
                        next("/login")
                    }).catch((error) => {
                        console.log(error.message)
                    })
                })
            }
        }
    }else{
        let toPath = to.path
        if( toPath.indexOf("/trade") != -1 || toPath.indexOf("/center") != -1 || toPath.indexOf("/pay") != -1 ){
            alert("请登录")
            next("/login?redirect=" + toPath)
        }else{
            next()
        }
        
    }
})


export default router