//对axios进行二次封装
import axios from "axios";

/* //引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css" */

//1.利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    //配置对象
    /* =========================================================================================================== */

    //基础路径
    baseURL:"/mock",
    //请求超时的时间
    timeout:5000,

});


//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发送之前做一些事情
requests.interceptors.request.use((config) => {
    //config：配置对象,headers请求头

    //进度条开始
    /* nprogress.start() */

    return config
})


//响应拦截器：
requests.interceptors.response.use(
    (response) => {
    //请求成功的回调：服务器的响应数据回来以后，响应拦截器可以检测到

        //进度条结束
        /* nprogress.done() */

        return response.data
    } , 
    (error) => {
    //请求失败的回调
        console.log(error.message)
        //终止Promise链Promise.reject(new Error("faile"))
        return Promise.reject(new Error("faile"))
    }
)



export default requests