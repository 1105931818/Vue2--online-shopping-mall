/* import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Cont from "@/pages/Cont"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"
import Center from "@/pages/Center"
import MyOrder from "@/pages/Center/myOrder"
import GroupOrder from "@/pages/Center/groupOrder" */

//路由懒加载
export default 
    [
        {
            name:"Home",
            path:"/home",
            component:() => import('@/pages/Home'),
            meta:{
                isShow:true
            }
        },
        {
            name:"Login",
            path:"/login",
            component:() => import('@/pages/Login'),
            meta:{
                isShow:false
            }
        },
        {
            name:"Register",
            path:"/register",
            component:() => import('@/pages/Register'),
            meta:{
                isShow:false
            }
        },
        {
            name:"Cont",
            path:"/cont",
            component:() => import('@/pages/Cont'),
            meta:{
                isShow:true
            },
           /*  props($route){
                return {
                    keyword:$route.params.keyword
                }
            } */
        },
        {
            name:"Detail",
            path:"/detail",
            component:() => import('@/pages/Detail'),
            meta:{
                isShow:true
            }
           
            
        },
        {
            name:"AddCartSuccess",
            path:"/addcartsuccess",
            component:() => import('@/pages/AddCartSuccess'),
            meta:{
                isShow:true
            }
        },
        {
            name:"ShopCart",
            path:"/shopcart",
            component:() => import('@/pages/ShopCart'),
            meta:{
                isShow:true
            }
        },
        {

            name:"Trade",
            path:"/trade",
            component:() => import('@/pages/Trade'),
            meta:{
                isShow:true
            },
            beforeEnter: (to, from, next) => {
                // ...
                if(from.path == "/shopcart"){
                    next()
                }else{
                    next(false)
                }
            }

        },
        {
            name:"Pay",
            path:"/pay",
            component:() => import('@/pages/Pay'),
            meta:{
                isShow:true
            },
            beforeEnter:(to , from , next) => {
                //...
                if(from.path == "/trade"){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            name:"PaySuccess",
            path:"/paysuccess",
            component:() => import('@/pages/PaySuccess'),
            meta:{
                isShow:true
            },
            beforeEnter:(to , from , next) => {
                //...
                if(from.path == "/pay"){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            name:"Center",
            path:"/center",
            component:() => import('@/pages/Center'),
            meta:{
                isShow:true
            },
            redirect:"/center/myorder",
            children:[
                {
                    name:"MyOrder",
                    path:"myorder",
                    component:() => import('@/pages/Center/myOrder'),
                    meta:{
                        isShow:true
                    }   
                },
                {
                    name:"GroupOrder",
                    path:"grouporder",
                    component:() => import('@/pages/Center/groupOrder'),
                    meta:{
                        isShow:true
                    }
                }
            ]
        },



        //重定向，访问该网站时，立马定向到首页
        {
            path:"*",
            redirect:"/home"
        }
    ]
