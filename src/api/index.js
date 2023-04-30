//API接口统一管理
import requests from "./request";
import mockRequests from "./mockAjax"

//首页三级联动：/api/product/getBaseCategoryList GET请求 
//发送请求：axios发请求返回结果是Promise对象
export const reqCategoryList = () => requests({
    url:"/product/getBaseCategoryList",
    method:"GET"
})



export const reqGetBannerList = () => mockRequests.get("/banner")
export const reqGetFloors = () => mockRequests.get("/floors")
export const reqGetDetail = () => mockRequests.get("/detail")
export const reqGetSkulist = () => mockRequests.get("/skulist")
export const reqGetUser = () => mockRequests.get("/useradderss")




export const reqSearchSelector = (params) => requests({
    url:"/list",
    method:"POST",
    data:params
})

export const reqGoodsInfo = (skuId) => requests({
    url:`/item/${skuId}`,
    method:"GET",
})

export const reqToCart = (skuId , skuNum) => requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:"POST"
})

export const reqCartList = () => requests({
    url:"/cart/cartList",
    method:"GET"
})

export const deleteCart = (skuId) => requests({
    url:`/cart/deleteCart/${skuId}`,
    method:"DELETE"
})

export const reqCheckCart = (skuId , isChecked) => requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:"GET"
})

//获取验证码
export const reqUsersendCode = (phone) => requests({
    url:`/user/passport/sendCode/${phone}`,
    method:"GET"
})

//tokInfo
export const reqUserInfo = () => requests({
    url:`/user/passport/auth/getUserInfo`,
    method:"GET"
})

//用户注册
export const reqUserRegister = (data) => requests({
    url:"/user/passport/register",
    data,
    method:"POST"
})

//用户登录
export const reqUserLogin = (data) => requests({
    url:"/user/passport/login",
    data,
    method:"POST"
})

//退出登录
export const reqUserLogout = () => requests({
    url:"/user/passport/logout",
    method:"GET"
})

//用户地址信息
export const reqUserAdderss = () => requests({
    url:"/user/userAddress/auth/findUserAddressList",
    method:"GET"
})

//获取订单页交易信息
export const reqTradeOrder = () => requests({
    url:"/order/auth/trade",
    method:"GET"
})

//提交订单
export const reqSubmitOrder = (tradeNo , data) => requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:"POST"
})

//获取订单支付信息
export const reqPaymentWeixin = (orderId) => requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:"GET"
})


//获取订单支付状态
export const reqPayStatus = (orderId) => requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:"GET"
})

//获取我的订单列表
export const reqAuthOrder = (page , limit) => requests({
    url:`/order/auth/${page}/${limit}`,
    method:"GET"
})
